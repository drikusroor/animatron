import { render } from '@redwoodjs/testing/web'

import KeyframeEditor from './KeyframeEditor'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('KeyframeEditor', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<KeyframeEditor />)
    }).not.toThrow()
  })
})
