import { render } from '@redwoodjs/testing/web'

import EntityList from './EntityList'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EntityList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EntityList />)
    }).not.toThrow()
  })
})
