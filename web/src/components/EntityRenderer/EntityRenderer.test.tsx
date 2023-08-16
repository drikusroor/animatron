import { render } from '@redwoodjs/testing/web'

import { createEntity } from 'src/__mocks__/mockData'

import EntityRenderer from './EntityRenderer'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EntityRenderer', () => {
  it('renders successfully', () => {
    const entity = createEntity()

    expect(() => {
      render(<EntityRenderer entity={entity} />)
    }).not.toThrow()
  })
})
