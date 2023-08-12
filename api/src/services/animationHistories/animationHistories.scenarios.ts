import type { Prisma, AnimationHistory } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.AnimationHistoryCreateArgs>({
  animationHistory: {
    one: {
      data: {
        name: 'String',
        uuid: 'String8282683',
        updatedAt: '2023-08-12T22:04:16.436Z',
      },
    },
    two: {
      data: {
        name: 'String',
        uuid: 'String102605',
        updatedAt: '2023-08-12T22:04:16.436Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  AnimationHistory,
  'animationHistory'
>
