import type { Animation } from '@prisma/client'

import {
  animations,
  animation,
  createAnimation,
  updateAnimation,
  deleteAnimation,
} from './animations'
import type { StandardScenario } from './animations.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('animations', () => {
  scenario('returns all animations', async (scenario: StandardScenario) => {
    const result = await animations()

    expect(result.length).toEqual(Object.keys(scenario.animation).length)
  })

  scenario('returns a single animation', async (scenario: StandardScenario) => {
    const result = await animation({ id: scenario.animation.one.id })

    expect(result).toEqual(scenario.animation.one)
  })

  scenario('creates a animation', async (scenario: StandardScenario) => {
    const result = await createAnimation({
      input: {
        name: 'String',
        animationHistoryId: scenario.animation.two.animationHistoryId,
        version: 807652,
        updatedAt: '2023-08-12T22:03:56.298Z',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.animationHistoryId).toEqual(
      scenario.animation.two.animationHistoryId
    )
    expect(result.version).toEqual(807652)
    expect(result.updatedAt).toEqual(new Date('2023-08-12T22:03:56.298Z'))
  })

  scenario('updates a animation', async (scenario: StandardScenario) => {
    const original = (await animation({
      id: scenario.animation.one.id,
    })) as Animation
    const result = await updateAnimation({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a animation', async (scenario: StandardScenario) => {
    const original = (await deleteAnimation({
      id: scenario.animation.one.id,
    })) as Animation
    const result = await animation({ id: original.id })

    expect(result).toEqual(null)
  })
})
