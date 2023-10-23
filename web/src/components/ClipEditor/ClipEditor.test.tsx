import { render } from '@redwoodjs/testing/web'

import ClipEditor from './ClipEditor'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ClipEditor', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ClipEditor />)
    }).not.toThrow()
  })
})
