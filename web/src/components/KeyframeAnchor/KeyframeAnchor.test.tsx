import { render } from '@redwoodjs/testing/web'

import KeyframeAnchor from './KeyframeAnchor'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('KeyframeAnchor', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<KeyframeAnchor />)
    }).not.toThrow()
  })
})
