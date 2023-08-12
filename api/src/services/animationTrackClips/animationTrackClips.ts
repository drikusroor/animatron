import type {
  QueryResolvers,
  MutationResolvers,
  AnimationTrackClipRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const animationTrackClips: QueryResolvers['animationTrackClips'] =
  () => {
    return db.animationTrackClip.findMany()
  }

export const animationTrackClip: QueryResolvers['animationTrackClip'] = ({
  id,
}) => {
  return db.animationTrackClip.findUnique({
    where: { id },
  })
}

export const createAnimationTrackClip: MutationResolvers['createAnimationTrackClip'] =
  ({ input }) => {
    return db.animationTrackClip.create({
      data: input,
    })
  }

export const updateAnimationTrackClip: MutationResolvers['updateAnimationTrackClip'] =
  ({ id, input }) => {
    return db.animationTrackClip.update({
      data: input,
      where: { id },
    })
  }

export const deleteAnimationTrackClip: MutationResolvers['deleteAnimationTrackClip'] =
  ({ id }) => {
    return db.animationTrackClip.delete({
      where: { id },
    })
  }

export const AnimationTrackClip: AnimationTrackClipRelationResolvers = {
  track: (_obj, { root }) => {
    return db.animationTrackClip.findUnique({ where: { id: root?.id } }).track()
  },
  entity: (_obj, { root }) => {
    return db.animationTrackClip
      .findUnique({ where: { id: root?.id } })
      .entity()
  },
  keyframes: (_obj, { root }) => {
    return db.animationTrackClip
      .findUnique({ where: { id: root?.id } })
      .keyframes()
  },
}
