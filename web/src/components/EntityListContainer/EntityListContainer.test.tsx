import { render } from '@redwoodjs/testing/web'

import EntityListContainer from './EntityListContainer'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EntityListContainer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EntityListContainer />)
    }).not.toThrow()
  })
})
