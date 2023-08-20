import type { AnimationHistory } from '@prisma/client'

import {
  animationHistories,
  animationHistory,
  createAnimationHistory,
  updateAnimationHistory,
  deleteAnimationHistory,
} from './animationHistories'
import type { StandardScenario } from './animationHistories.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('animationHistories', () => {
  scenario(
    'returns all animationHistories',
    async (scenario: StandardScenario) => {
      const result = await animationHistories()

      expect(result.length).toEqual(
        Object.keys(scenario.animationHistory).length
      )
    }
  )

  scenario(
    'returns a single animationHistory',
    async (scenario: StandardScenario) => {
      const result = await animationHistory({
        id: scenario.animationHistory.one.id,
      })

      expect(result).toEqual(scenario.animationHistory.one)
    }
  )

  scenario('creates a animationHistory', async () => {
    const result = await createAnimationHistory({
      input: {
        id: 'e4d5f0b0-0b1a-4b0e-9b0a-9b0a9b0a9b0b',
        name: 'String',
        updatedAt: '2023-08-12T22:04:16.421Z',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.id).toEqual('e4d5f0b0-0b1a-4b0e-9b0a-9b0a9b0a9b0b')
    expect(result.updatedAt).toEqual(new Date('2023-08-12T22:04:16.421Z'))
  })

  scenario('updates a animationHistory', async (scenario: StandardScenario) => {
    const original = (await animationHistory({
      id: scenario.animationHistory.one.id,
    })) as AnimationHistory
    const result = await updateAnimationHistory({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a animationHistory', async (scenario: StandardScenario) => {
    const original = (await deleteAnimationHistory({
      id: scenario.animationHistory.one.id,
    })) as AnimationHistory
    const result = await animationHistory({ id: original.id })

    expect(result).toEqual(null)
  })
})
