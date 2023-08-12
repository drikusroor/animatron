import type {
  QueryResolvers,
  MutationResolvers,
  AnimationTrackRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const animationTracks: QueryResolvers['animationTracks'] = () => {
  return db.animationTrack.findMany()
}

export const animationTrack: QueryResolvers['animationTrack'] = ({ id }) => {
  return db.animationTrack.findUnique({
    where: { id },
  })
}

export const createAnimationTrack: MutationResolvers['createAnimationTrack'] =
  ({ input }) => {
    return db.animationTrack.create({
      data: input,
    })
  }

export const updateAnimationTrack: MutationResolvers['updateAnimationTrack'] =
  ({ id, input }) => {
    return db.animationTrack.update({
      data: input,
      where: { id },
    })
  }

export const deleteAnimationTrack: MutationResolvers['deleteAnimationTrack'] =
  ({ id }) => {
    return db.animationTrack.delete({
      where: { id },
    })
  }

export const AnimationTrack: AnimationTrackRelationResolvers = {
  revision: (_obj, { root }) => {
    return db.animationTrack.findUnique({ where: { id: root?.id } }).revision()
  },
  clips: (_obj, { root }) => {
    return db.animationTrack.findUnique({ where: { id: root?.id } }).clips()
  },
}
