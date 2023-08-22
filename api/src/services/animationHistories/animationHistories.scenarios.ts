import type { Prisma, AnimationHistory } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.AnimationHistoryCreateArgs>({
  animationHistory: {
    one: {
      data: {
        id: 'e8d7f0b0-0b1a-4b0e-9b0a-9b0a9b0a9b0b',
        name: 'String',
        updatedAt: '2023-08-12T22:04:16.436Z',
      },
    },
    two: {
      data: {
        id: 'e8d7f0b0-0b1a-4b0e-9b0a-9b0a9b0a9b0a',
        name: 'String',
        updatedAt: '2023-08-12T22:04:16.436Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  AnimationHistory,
  'animationHistory'
>
