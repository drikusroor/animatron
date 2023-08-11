import { render } from '@redwoodjs/testing/web'

import TrackDetails from './TrackDetails'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

const track = {
  id: 1,
  name: 'Test Track',
  clips: [
    {
      id: 1,
      start: 10,
      keyframes: [
        {
          id: 1,
          duration: 10,
        },
        {
          id: 2,
          duration: 60,
        },
      ],
    },
    {
      id: 2,
      start: 20,
      keyframes: [
        {
          id: 3,
          duration: 10,
        },
        {
          id: 4,
          duration: 60,
        },
      ],
    },
  ],
}

describe('TrackDetails', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TrackDetails track={track} />)
    }).not.toThrow()
  })
})
