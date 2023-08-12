import type { AnimationTrackClip } from '@prisma/client'

import {
  animationTrackClips,
  animationTrackClip,
  createAnimationTrackClip,
  updateAnimationTrackClip,
  deleteAnimationTrackClip,
} from './animationTrackClips'
import type { StandardScenario } from './animationTrackClips.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('animationTrackClips', () => {
  scenario(
    'returns all animationTrackClips',
    async (scenario: StandardScenario) => {
      const result = await animationTrackClips()

      expect(result.length).toEqual(
        Object.keys(scenario.animationTrackClip).length
      )
    }
  )

  scenario(
    'returns a single animationTrackClip',
    async (scenario: StandardScenario) => {
      const result = await animationTrackClip({
        id: scenario.animationTrackClip.one.id,
      })

      expect(result).toEqual(scenario.animationTrackClip.one)
    }
  )

  scenario(
    'creates a animationTrackClip',
    async (scenario: StandardScenario) => {
      const result = await createAnimationTrackClip({
        input: {
          start: 1295808,
          animationTrackId: scenario.animationTrackClip.two.animationTrackId,
          animationEntityId: scenario.animationTrackClip.two.animationEntityId,
        },
      })

      expect(result.start).toEqual(1295808)
      expect(result.animationTrackId).toEqual(
        scenario.animationTrackClip.two.animationTrackId
      )
      expect(result.animationEntityId).toEqual(
        scenario.animationTrackClip.two.animationEntityId
      )
    }
  )

  scenario(
    'updates a animationTrackClip',
    async (scenario: StandardScenario) => {
      const original = (await animationTrackClip({
        id: scenario.animationTrackClip.one.id,
      })) as AnimationTrackClip
      const result = await updateAnimationTrackClip({
        id: original.id,
        input: { start: 4752669 },
      })

      expect(result.start).toEqual(4752669)
    }
  )

  scenario(
    'deletes a animationTrackClip',
    async (scenario: StandardScenario) => {
      const original = (await deleteAnimationTrackClip({
        id: scenario.animationTrackClip.one.id,
      })) as AnimationTrackClip
      const result = await animationTrackClip({ id: original.id })

      expect(result).toEqual(null)
    }
  )
})
