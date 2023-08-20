import type {
  QueryResolvers,
  MutationResolvers,
  AnimationRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

import {
  createNewAnimation,
  createTracksForAnimation,
  getNextVersion,
  replaceAnimationUuids,
} from './helpers/create-animation'

export const animations: QueryResolvers['animations'] = () => {
  return db.animation.findMany()
}

export const animation: QueryResolvers['animation'] = ({ id }) => {
  return db.animation.findUnique({
    where: { id },
  })
}

export const animationByHistoryIdAndVersion: QueryResolvers['animationByHistoryIdAndVersion'] =
  async (input) => {
    const { animationHistoryId, version } = input

    const animationHistory = await db.animationHistory.findFirst({
      where: {
        id: animationHistoryId,
      },
    })

    if (!animationHistory) {
      throw new Error(
        `No animation history found with uuid: ${animationHistoryId}`
      )
    }

    const animation = await db.animation.findFirst({
      where: {
        version,
        animationHistoryId: animationHistory?.id,
      },
    })

    if (!animation) {
      throw new Error(
        `No animation found with version: ${version} for animation history: ${animationHistoryId}`
      )
    }

    return animation
  }

export const createAnimation: MutationResolvers['createAnimation'] = async ({
  input,
}) => {
  input = replaceAnimationUuids(input)
  const { tracks, entities, ...animationInput } = input

  const version = await getNextVersion(input.animationHistoryId)
  const createdAnimation = await createNewAnimation(
    animationInput,
    entities,
    version
  )
  const createdTracks = await createTracksForAnimation(
    tracks,
    entities,
    createdAnimation
  )

  return {
    ...createdAnimation,
    tracks: createdTracks,
  }
}

export const updateAnimation: MutationResolvers['updateAnimation'] = ({
  id,
  input,
}) => {
  return db.animation.update({
    data: input,
    where: { id },
  })
}

export const deleteAnimation: MutationResolvers['deleteAnimation'] = ({
  id,
}) => {
  return db.animation.delete({
    where: { id },
  })
}

export const Animation: AnimationRelationResolvers = {
  AnimationHistory: (_obj, { root }) => {
    return db.animation
      .findUnique({ where: { id: root?.id } })
      .AnimationHistory()
  },
  tracks: (_obj, { root }) => {
    return db.animation.findUnique({ where: { id: root?.id } }).tracks()
  },
  entities: (_obj, { root }) => {
    return db.animation.findUnique({ where: { id: root?.id } }).entities()
  },
}
