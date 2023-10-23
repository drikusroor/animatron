import { render } from '@redwoodjs/testing/web'

import NewClipGhost from './NewClipGhost'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NewClipGhost', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewClipGhost />)
    }).not.toThrow()
  })
})
