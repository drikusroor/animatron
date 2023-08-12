import type { AnimationTrack } from '@prisma/client'

import {
  animationTracks,
  animationTrack,
  createAnimationTrack,
  updateAnimationTrack,
  deleteAnimationTrack,
} from './animationTracks'
import type { StandardScenario } from './animationTracks.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('animationTracks', () => {
  scenario(
    'returns all animationTracks',
    async (scenario: StandardScenario) => {
      const result = await animationTracks()

      expect(result.length).toEqual(Object.keys(scenario.animationTrack).length)
    }
  )

  scenario(
    'returns a single animationTrack',
    async (scenario: StandardScenario) => {
      const result = await animationTrack({
        id: scenario.animationTrack.one.id,
      })

      expect(result).toEqual(scenario.animationTrack.one)
    }
  )

  scenario('creates a animationTrack', async (scenario: StandardScenario) => {
    const result = await createAnimationTrack({
      input: {
        name: 'String',
        revisionId: scenario.animationTrack.two.revisionId,
        updatedAt: '2023-08-12T22:04:26.551Z',
        sortNumber: 2918074,
      },
    })

    expect(result.name).toEqual('String')
    expect(result.revisionId).toEqual(scenario.animationTrack.two.revisionId)
    expect(result.updatedAt).toEqual(new Date('2023-08-12T22:04:26.551Z'))
    expect(result.sortNumber).toEqual(2918074)
  })

  scenario('updates a animationTrack', async (scenario: StandardScenario) => {
    const original = (await animationTrack({
      id: scenario.animationTrack.one.id,
    })) as AnimationTrack
    const result = await updateAnimationTrack({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a animationTrack', async (scenario: StandardScenario) => {
    const original = (await deleteAnimationTrack({
      id: scenario.animationTrack.one.id,
    })) as AnimationTrack
    const result = await animationTrack({ id: original.id })

    expect(result).toEqual(null)
  })
})
