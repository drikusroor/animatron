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
                id: 'e8d7f0b0-0b1a-123e-9b0a-5b0a9b0a9b0b',
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
                id: 'e8d7f0b0-0b1a-123f-9b0a-6b0a9b0a9b0b',
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
