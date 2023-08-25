import type {
  QueryResolvers,
  MutationResolvers,
  AnimationRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

import { createAnimationHistory } from '../animationHistories/animationHistories'

import {
  createNewAnimation,
  createTracksForAnimation,
  getNextVersion,
  replaceAnimationUuids,
} from './helpers/create-animation'

export const animations: QueryResolvers['animations'] = () => {
  return db.animation.findMany()
}

export const recentAnimations: QueryResolvers['animations'] = async () => {
  const recentRevisionIds = (
    await db.$queryRaw<{ id: number }[]>`
    WITH LatestAnimations AS (
        SELECT animationHistoryId, MAX(version) as maxVersion
        FROM Animation
        GROUP BY animationHistoryId
    )
    SELECT a.id
    FROM Animation a
    JOIN LatestAnimations la ON a.animationHistoryId = la.animationHistoryId AND a.version = la.maxVersion
    ORDER BY a.createdAt DESC
`
  ).map(({ id }) => id)

  const animations = await db.animation.findMany({
    where: {
      id: {
        in: recentRevisionIds,
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return animations
}

export const animation: QueryResolvers['animation'] = ({ id }) => {
  return db.animation.findUnique({
    where: { id },
  })
}

export const animationByHistoryIdAndVersion: QueryResolvers['animationByHistoryIdAndVersion'] =
  async (input) => {
    const { animationHistoryId, version } = input

    const animationHistory = await db.animationHistory.findUnique({
      where: { id: animationHistoryId },
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
        `Nox animation found with version: ${version} for animation history: ${animationHistoryId}`
      )
    }

    return animation
  }

export const createAnimation: MutationResolvers['createAnimation'] = async ({
  input,
}) => {
  input = replaceAnimationUuids(input)
  const { tracks, entities, ...animationInput } = input

  let version = await getNextVersion(input.animationHistoryId)

  /**
   * If the animation history is not the latest version, fork it
   */
  if (version - input.version !== 1) {
    const newAnimationHistory = await createAnimationHistory({
      input: {
        forkedFromHistoryId: input.animationHistoryId,
        name: `${input.name} (forked)`,
        description: input.description,
      },
    })

    animationInput.animationHistoryId = newAnimationHistory.id
    version = 1
  }

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
