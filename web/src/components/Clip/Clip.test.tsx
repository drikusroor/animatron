import { render } from '@redwoodjs/testing/web'

import Clip from './Clip'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Clip', () => {
  it('renders successfully', () => {
    expect(() => {
      const clip = {
        id: 1,
        start: 10,
        keyframes: [
          {
            id: 1,
            duration: 10,
          },
          {
            id: 2,
            duration: 50,
          },
          {
            id: 3,
            duration: 10,
          },
        ],
      }

      render(<Clip clip={clip} />)
    }).not.toThrow()
  })
})
