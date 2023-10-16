import { render } from '@redwoodjs/testing/web'

import RecentAnimations from './RecentAnimations'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RecentAnimations', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RecentAnimations />)
    }).not.toThrow()
  })
})
