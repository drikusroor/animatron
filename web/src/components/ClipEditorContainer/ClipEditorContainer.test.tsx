import { render } from '@redwoodjs/testing/web'

import ClipEditorContainer from './ClipEditorContainer'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ClipEditorContainer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ClipEditorContainer />)
    }).not.toThrow()
  })
})
