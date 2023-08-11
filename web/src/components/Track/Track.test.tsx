import { render } from '@redwoodjs/testing/web'

import Track from './Track'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

const track = {
  id: 1,
  name: 'Track',
  clips: [
    {
      id: 1,
      start: 0,
      keyframes: [
        {
          id: 1,
          duration: 20,
        },
      ],
    },
    {
      id: 1,
      start: 25,
      keyframes: [
        {
          id: 1,
          duration: 10,
        },
        {
          id: 1,
          duration: 10,
        },
      ],
    },
  ],
}

describe('Track', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Track track={track} />)
    }).not.toThrow()
  })
})
