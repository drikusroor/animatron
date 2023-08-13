import { render } from '@redwoodjs/testing/web'

import AnimationEditor from './AnimationEditor'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AnimationEditor', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AnimationEditor />)
    }).not.toThrow()
  })
})
