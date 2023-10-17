import type {
  QueryResolvers,
  MutationResolvers,
  AnimationHistoryRelationResolvers,
} from 'types/graphql'

import { uniqueNamesGenerator, adjectives } from 'unique-names-generator'

import { db } from 'src/lib/db'

export const animationHistories: QueryResolvers['animationHistories'] = () => {
  return db.animationHistory.findMany()
}

export const animationHistory: QueryResolvers['animationHistory'] = ({
  id,
}) => {
  return db.animationHistory.findUnique({
    where: { id },
  })
}

export const createAnimationHistory: MutationResolvers['createAnimationHistory'] =
  ({ input }) => {
    return db.animationHistory.create({
      data: input,
    })
  }

// For start animating 💪 feature button
export const createAnimationHistoryForStartAnimating: MutationResolvers['createAnimationHistoryForStartAnimating'] =
  () => {
    return db.animationHistory.create({
      data: {
        name: uniqueNamesGenerator({ dictionaries: [adjectives]}),
        description: '',
        revisions: {
          create: [
            {
              name: 'First revision',
              description: '',
              version: 1,
              tracks: {
                create: [
                  {
                    name: 'Track 1',
                    description: '',
                    sortNumber: 1,
                  },
                ],
              },
            },
          ],
        },
      },
    })
  }

export const updateAnimationHistory: MutationResolvers['updateAnimationHistory'] =
  ({ id, input }) => {
    return db.animationHistory.update({
      data: input,
      where: { id },
    })
  }

export const deleteAnimationHistory: MutationResolvers['deleteAnimationHistory'] =
  ({ id }) => {
    return db.animationHistory.delete({
      where: { id },
    })
  }

export const AnimationHistory: AnimationHistoryRelationResolvers = {
  revisions: (_obj, { root }) => {
    return db.animationHistory
      .findUnique({ where: { id: root?.id } })
      .revisions()
  },
}
