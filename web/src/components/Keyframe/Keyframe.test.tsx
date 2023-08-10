import { render } from '@redwoodjs/testing/web'

import Keyframe from './Keyframe'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Keyframe', () => {
  it('renders successfully', () => {
    expect(() => {
      const keyframe = {
        id: 1,
        duration: 10,
      }

      render(<Keyframe keyframe={keyframe} />)
    }).not.toThrow()
  })
})
