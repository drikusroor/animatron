import { render } from '@redwoodjs/testing/web'

import EntityEditor from './EntityEditor'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EntityEditor', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EntityEditor />)
    }).not.toThrow()
  })
})
