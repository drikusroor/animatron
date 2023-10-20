import { render } from '@redwoodjs/testing/web'

import Tracks from './Tracks'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Tracks', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Tracks />)
    }).not.toThrow()
  })
})
