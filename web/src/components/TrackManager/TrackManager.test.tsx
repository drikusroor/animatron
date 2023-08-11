import { render } from '@redwoodjs/testing/web'

import { createTrack } from 'src/__mocks__/mockData'

import TrackManager from './TrackManager'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TrackManager', () => {
  it('renders successfully', () => {
    const tracks = [
      createTrack({ id: 1, name: 'Track 1' }),
      createTrack({ id: 2, name: 'Track 2' }),
    ]

    expect(() => {
      render(<TrackManager tracks={tracks} />)
    }).not.toThrow()
  })
})
