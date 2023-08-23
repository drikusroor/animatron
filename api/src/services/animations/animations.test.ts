import type { Animation } from '@prisma/client'

import {
  animations,
  animation,
  createAnimation,
  updateAnimation,
  deleteAnimation,
  animationByHistoryIdAndVersion,
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

  scenario(
    'returns a single animation by history uuid and version',
    async (scenario: StandardScenario) => {
      const scenarios = [scenario.animation.one, scenario.animation.two]
      await Promise.all(
        scenarios.map(async (animation) => {
          const result = await animationByHistoryIdAndVersion({
            animationHistoryId: animation.animationHistoryId,
            version: animation.version,
          })

          expect(result).toEqual(animation)
        })
      )
    }
  )

  scenario('creates a animation', async (scenario: StandardScenario) => {
    const result = await createAnimation({
      input: {
        name: 'String',
        animationHistoryId: scenario.animation.two.animationHistoryId,
        version: scenario.animation.two.version,
        entities: [
          {
            name: 'Entity name 1',
            image: 'String',
            html: 'String',
            css: 'String',
            uuid: '1281a0b0-0b1a-4b0e-9b0a-9b0a9b0a9b0a',
          },
        ],
        tracks: [
          {
            name: 'String',
            description: 'String',
            uuid: 'String',
            sortNumber: 1,
            clips: [
              {
                uuid: '8127a0b0-0b1a-4b0e-660a-9b0a9b0a9b0a',
                start: 1,
                animationEntityUuid: '1281a0b0-0b1a-4b0e-9b0a-9b0a9b0a9b0a',
                keyframes: [
                  {
                    uuid: '1972a0b0-0b1a-4b0e-9b0a-9b0a9b0a9b0a',
                    css: 'Crazy keyframe',
                    duration: 1,
                    sort: 1,
                  },
                ],
              },
            ],
          },
        ],
      },
    })

    expect(result.name).toEqual('String')
    expect(result.animationHistoryId).toEqual(
      scenario.animation.two.animationHistoryId
    )
    expect(result.version).toEqual(scenario.animation.two.version + 1)
    expect(result.entities[0].name).toEqual('Entity name 1')
    expect(result.tracks.length).toEqual(1)
    expect(result.tracks[0].clips.length).toEqual(1)
    expect(result.tracks[0].clips[0].keyframes.length).toEqual(1)
    expect(result.tracks[0].clips[0].keyframes[0].css).toEqual('Crazy keyframe')
    expect(result.entities[0].id).toEqual(
      result.tracks[0].clips[0].animationEntityId
    )
  })

  scenario('updates a animation', async (scenario: StandardScenario) => {
    const original = (await animation({
      id: scenario.animation.one.id,
    })) as Animation
    const result = await updateAnimation({
      id: original.id,
      input: {
        name: 'String2',
        animationHistoryId: original.animationHistoryId,
      },
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
