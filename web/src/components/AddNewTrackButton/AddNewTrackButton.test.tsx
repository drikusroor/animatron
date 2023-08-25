import { render } from '@redwoodjs/testing/web'

import AddNewTrackButton from './AddNewTrackButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AddNewTrackButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AddNewTrackButton />)
    }).not.toThrow()
  })
})
