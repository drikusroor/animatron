import { render } from '@redwoodjs/testing/web'

import KeyframeSpan from './KeyframeSpan'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('KeyframeSpan', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<KeyframeSpan />)
    }).not.toThrow()
  })
})
