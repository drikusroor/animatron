import {
  CreateAnimationEntityInput,
  CreateAnimationInput,
  CreateAnimationTrackInput,
} from 'types/graphql'
import { v4 as uuidv4 } from 'uuid'

import { db } from 'src/lib/db'

export function replaceAnimationUuids(
  animation: CreateAnimationInput
): CreateAnimationInput {
  const uuidMap: { [key: string]: string } = {}

  animation.uuid = uuidv4()

  // Relations have to be mapped as well using the map of old uuids to new uuids
  const entities = animation.entities.map((entity) => {
    const newUuid = uuidv4()
    uuidMap[entity.uuid] = newUuid
    return {
      ...entity,
      uuid: newUuid,
    }
  })

  const tracks = animation.tracks.map((track) => {
    const newUuid = uuidv4()
    uuidMap[track.uuid] = newUuid
    return {
      ...track,
      uuid: newUuid,
      clips: track.clips.map((clip) => {
        // Maintain the old uuid if it exists in the map, otherwise create a new one
        // This is necessary because a clip is related to an animation entity
        const newUuid = uuidMap[clip.uuid] ? uuidMap[clip.uuid] : uuidv4()
        uuidMap[clip.uuid] = newUuid
        return {
          ...clip,
          uuid: newUuid,
          animationEntityUuid: uuidMap[clip.animationEntityUuid],
          keyframes: clip.keyframes.map((keyframe) => {
            const newUuid = uuidv4()
            uuidMap[keyframe.uuid] = newUuid
            return {
              ...keyframe,
              uuid: newUuid,
            }
          }),
        }
      }),
    }
  })

  return {
    ...animation,
    entities,
    tracks,
  }
}

export async function getNextVersion(animationHistoryId: any): Promise<number> {
  const latestAnimation = await db.animation.findFirst({
    where: { animationHistoryId },
    orderBy: { version: 'desc' },
  })
  return latestAnimation ? latestAnimation.version + 1 : 1
}

export async function createNewAnimation(
  animationInput: CreateAnimationInput,
  entities: CreateAnimationEntityInput[],
  version: number
) {
  return db.animation.create({
    data: {
      ...animationInput,
      version,
      entities: { create: entities },
    },
    include: { entities: true },
  })
}

export async function createTracksForAnimation(
  tracks: CreateAnimationTrackInput[],
  entities: CreateAnimationEntityInput[],
  createdAnimation: any
) {
  return Promise.all(
    tracks.map(async (track) => createTrack(track, entities, createdAnimation))
  )
}

export async function createTrack(
  track: CreateAnimationTrackInput,
  entities: CreateAnimationEntityInput[],
  createdAnimation: any
) {
  const { clips: _clips, ...trackInput } = track
  return db.animationTrack.create({
    data: {
      ...trackInput,
      revisionId: createdAnimation.id,
      clips: {
        create: track.clips.map((clip: any) => {
          const {
            animationEntityUuid,
            keyframes: _keyframes,
            ...clipInput
          } = clip
          const animationEntityId = findEntityIdByUUID(
            animationEntityUuid,
            entities,
            createdAnimation
          )
          return {
            ...clipInput,
            animationEntityId,
            keyframes: { create: clip.keyframes },
          }
        }),
      },
    },
    include: {
      clips: {
        include: {
          keyframes: true,
        },
      },
    },
  })
}

export function findEntityIdByUUID(
  animationEntityUuid: string,
  entities: CreateAnimationEntityInput[],
  createdAnimation: any
): number {
  const createdEntityIndex = entities.findIndex(
    (entity) => entity.uuid === animationEntityUuid
  )
  return createdAnimation.entities[createdEntityIndex].id
}
