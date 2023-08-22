import type { Prisma, Animation } from '@prisma/client'
import { v4 as uuidv4 } from 'uuid'

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
            id: uuidv4(),
            name: 'History 1',
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
            id: uuidv4(),
            name: 'History 2',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Animation, 'animation'>
