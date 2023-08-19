import type { Prisma, Animation } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.AnimationCreateArgs>({
  animation: {
    one: {
      data: {
        name: 'String',
        version: 666,
        updatedAt: '2023-08-12T22:03:56.314Z',
        AnimationHistory: {
          create: {
            name: 'String',
            uuid: '8127a0b0-0b1a-4b0e-9b0a-9b0a9b0a9b0a',
            updatedAt: '2023-08-12T22:03:56.314Z',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        version: 333,
        updatedAt: '2023-08-12T22:03:56.314Z',
        AnimationHistory: {
          create: {
            name: 'String',
            uuid: '1027a0b0-0b1a-4b0e-9b0a-9b0a9b0a9b0a',
            updatedAt: '2023-08-12T22:03:56.314Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Animation, 'animation'>
