import type { AnimationTrackKeyframe } from '@prisma/client'

import {
  animationTrackKeyframes,
  animationTrackKeyframe,
  createAnimationTrackKeyframe,
  updateAnimationTrackKeyframe,
  deleteAnimationTrackKeyframe,
} from './animationTrackKeyframes'
import type { StandardScenario } from './animationTrackKeyframes.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('animationTrackKeyframes', () => {
  scenario(
    'returns all animationTrackKeyframes',
    async (scenario: StandardScenario) => {
      const result = await animationTrackKeyframes()

      expect(result.length).toEqual(
        Object.keys(scenario.animationTrackKeyframe).length
      )
    }
  )

  scenario(
    'returns a single animationTrackKeyframe',
    async (scenario: StandardScenario) => {
      const result = await animationTrackKeyframe({
        id: scenario.animationTrackKeyframe.one.id,
      })

      expect(result).toEqual(scenario.animationTrackKeyframe.one)
    }
  )

  scenario('creates a animationTrackKeyframe', async () => {
    const result = await createAnimationTrackKeyframe({
      input: { sort: 5893441, duration: 3968440, css: 'String' },
    })

    expect(result.sort).toEqual(5893441)
    expect(result.duration).toEqual(3968440)
    expect(result.css).toEqual('String')
  })

  scenario(
    'updates a animationTrackKeyframe',
    async (scenario: StandardScenario) => {
      const original = (await animationTrackKeyframe({
        id: scenario.animationTrackKeyframe.one.id,
      })) as AnimationTrackKeyframe
      const result = await updateAnimationTrackKeyframe({
        id: original.id,
        input: { sort: 4837212 },
      })

      expect(result.sort).toEqual(4837212)
    }
  )

  scenario(
    'deletes a animationTrackKeyframe',
    async (scenario: StandardScenario) => {
      const original = (await deleteAnimationTrackKeyframe({
        id: scenario.animationTrackKeyframe.one.id,
      })) as AnimationTrackKeyframe
      const result = await animationTrackKeyframe({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
