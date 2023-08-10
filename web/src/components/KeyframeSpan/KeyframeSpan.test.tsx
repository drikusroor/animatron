import { render } from '@redwoodjs/testing/web'

import KeyframeSpan from './KeyframeSpan'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('KeyframeSpan', () => {
  it('renders successfully', () => {
    expect(() => {
      const keyframe = {
        id: 1,
        duration: 10,
      }

      render(<KeyframeSpan keyframe={keyframe} />)
    }).not.toThrow()
  })
})
