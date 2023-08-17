import type { Prisma, Animation } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.AnimationCreateArgs>({
  animation: {
    one: {
      data: {
        name: 'String',
        version: 8508796,
        updatedAt: '2023-08-12T22:03:56.314Z',
        AnimationHistory: {
          create: {
            name: 'String',
            uuid: 'String2450868',
            updatedAt: '2023-08-12T22:03:56.314Z',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        version: 8999078,
        updatedAt: '2023-08-12T22:03:56.314Z',
        AnimationHistory: {
          create: {
            name: 'String',
            uuid: 'String25455',
            updatedAt: '2023-08-12T22:03:56.314Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Animation, 'animation'>
