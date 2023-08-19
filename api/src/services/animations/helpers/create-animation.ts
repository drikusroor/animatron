import {
  CreateAnimationEntityInput,
  CreateAnimationInput,
  CreateAnimationTrackInput,
} from 'types/graphql'

import { db } from 'src/lib/db'

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
