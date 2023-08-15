import { render } from '@redwoodjs/testing/web'

import EntityEditorContainer from './EntityEditorContainer'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EntityEditorContainer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EntityEditorContainer />)
    }).not.toThrow()
  })
})
