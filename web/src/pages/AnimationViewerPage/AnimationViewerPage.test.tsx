import { render } from '@redwoodjs/testing/web'

import AnimationViewerPage from './AnimationViewerPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AnimationViewerPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AnimationViewerPage />)
    }).not.toThrow()
  })
})
