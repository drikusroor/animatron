import type {
  QueryResolvers,
  MutationResolvers,
  AnimationTrackKeyframeRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const animationTrackKeyframes: QueryResolvers['animationTrackKeyframes'] =
  () => {
    return db.animationTrackKeyframe.findMany()
  }

export const animationTrackKeyframe: QueryResolvers['animationTrackKeyframe'] =
  ({ id }) => {
    return db.animationTrackKeyframe.findUnique({
      where: { id },
    })
  }

export const createAnimationTrackKeyframe: MutationResolvers['createAnimationTrackKeyframe'] =
  ({ input }) => {
    return db.animationTrackKeyframe.create({
      data: input,
    })
  }

export const updateAnimationTrackKeyframe: MutationResolvers['updateAnimationTrackKeyframe'] =
  ({ id, input }) => {
    return db.animationTrackKeyframe.update({
      data: input,
      where: { id },
    })
  }

export const deleteAnimationTrackKeyframe: MutationResolvers['deleteAnimationTrackKeyframe'] =
  ({ id }) => {
    return db.animationTrackKeyframe.delete({
      where: { id },
    })
  }

export const AnimationTrackKeyframe: AnimationTrackKeyframeRelationResolvers = {
  clip: (_obj, { root }) => {
    return db.animationTrackKeyframe
      .findUnique({ where: { id: root?.id } })
      .clip()
  },
}
