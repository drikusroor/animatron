import { render } from '@redwoodjs/testing/web'

import KeyframeEditorContainer from './KeyframeEditorContainer'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('KeyframeEditorContainer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<KeyframeEditorContainer />)
    }).not.toThrow()
  })
})
