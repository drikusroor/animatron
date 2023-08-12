import type { Prisma, AnimationEntity } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.AnimationEntityCreateArgs>({
  animationEntity: {
    one: {
      data: {
        name: 'String',
        updatedAt: '2023-08-12T22:04:34.660Z',
        image: 'String',
        html: 'String',
        css: 'String',
        revision: {
          create: {
            name: 'String',
            version: 4108668,
            updatedAt: '2023-08-12T22:04:34.660Z',
            AnimationHistory: {
              create: {
                name: 'String',
                uuid: 'String3895931',
                updatedAt: '2023-08-12T22:04:34.660Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        updatedAt: '2023-08-12T22:04:34.660Z',
        image: 'String',
        html: 'String',
        css: 'String',
        revision: {
          create: {
            name: 'String',
            version: 2662320,
            updatedAt: '2023-08-12T22:04:34.660Z',
            AnimationHistory: {
              create: {
                name: 'String',
                uuid: 'String2042120',
                updatedAt: '2023-08-12T22:04:34.660Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<AnimationEntity, 'animationEntity'>
