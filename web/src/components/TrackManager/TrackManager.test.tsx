import { render } from '@redwoodjs/testing/web'

import TrackManager from './TrackManager'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TrackManager', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TrackManager />)
    }).not.toThrow()
  })
})
