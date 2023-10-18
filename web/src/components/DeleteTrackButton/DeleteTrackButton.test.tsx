import { render } from '@redwoodjs/testing/web'

import DeleteTrackButton from './DeleteTrackButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DeleteTrackButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DeleteTrackButton />)
    }).not.toThrow()
  })
})
