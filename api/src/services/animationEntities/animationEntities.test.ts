import type { AnimationEntity } from '@prisma/client'

import {
  animationEntities,
  animationEntity,
  createAnimationEntity,
  updateAnimationEntity,
  deleteAnimationEntity,
} from './animationEntities'
import type { StandardScenario } from './animationEntities.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('animationEntities', () => {
  scenario(
    'returns all animationEntities',
    async (scenario: StandardScenario) => {
      const result = await animationEntities()

      expect(result.length).toEqual(
        Object.keys(scenario.animationEntity).length
      )
    }
  )

  scenario(
    'returns a single animationEntity',
    async (scenario: StandardScenario) => {
      const result = await animationEntity({
        id: scenario.animationEntity.one.id,
      })

      expect(result).toEqual(scenario.animationEntity.one)
    }
  )

  scenario('creates a animationEntity', async (scenario: StandardScenario) => {
    const result = await createAnimationEntity({
      input: {
        name: 'String',
        revisionId: scenario.animationEntity.two.revisionId,
        updatedAt: '2023-08-12T22:04:34.619Z',
        image: 'String',
        html: 'String',
        css: 'String',
      },
    })

    expect(result.name).toEqual('String')
    expect(result.revisionId).toEqual(scenario.animationEntity.two.revisionId)
    expect(result.updatedAt).toEqual(new Date('2023-08-12T22:04:34.619Z'))
    expect(result.image).toEqual('String')
    expect(result.html).toEqual('String')
    expect(result.css).toEqual('String')
  })

  scenario('updates a animationEntity', async (scenario: StandardScenario) => {
    const original = (await animationEntity({
      id: scenario.animationEntity.one.id,
    })) as AnimationEntity
    const result = await updateAnimationEntity({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a animationEntity', async (scenario: StandardScenario) => {
    const original = (await deleteAnimationEntity({
      id: scenario.animationEntity.one.id,
    })) as AnimationEntity
    const result = await animationEntity({ id: original.id })

    expect(result).toEqual(null)
  })
})
