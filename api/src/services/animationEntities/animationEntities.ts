import type {
  QueryResolvers,
  MutationResolvers,
  AnimationEntityRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const animationEntities: QueryResolvers['animationEntities'] = () => {
  return db.animationEntity.findMany()
}

export const animationEntity: QueryResolvers['animationEntity'] = ({ id }) => {
  return db.animationEntity.findUnique({
    where: { id },
  })
}

export const createAnimationEntity: MutationResolvers['createAnimationEntity'] =
  ({ input }) => {
    return db.animationEntity.create({
      data: input,
    })
  }

export const updateAnimationEntity: MutationResolvers['updateAnimationEntity'] =
  ({ id, input }) => {
    return db.animationEntity.update({
      data: input,
      where: { id },
    })
  }

export const deleteAnimationEntity: MutationResolvers['deleteAnimationEntity'] =
  ({ id }) => {
    return db.animationEntity.delete({
      where: { id },
    })
  }

export const AnimationEntity: AnimationEntityRelationResolvers = {
  revision: (_obj, { root }) => {
    return db.animationEntity.findUnique({ where: { id: root?.id } }).revision()
  },
  clip: (_obj, { root }) => {
    return db.animationEntity.findUnique({ where: { id: root?.id } }).clip()
  },
}
