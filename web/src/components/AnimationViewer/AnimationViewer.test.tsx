import { render } from '@redwoodjs/testing/web'

import AnimationViewer from './AnimationViewer'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AnimationViewer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AnimationViewer />)
    }).not.toThrow()
  })
})
