import { render } from '@redwoodjs/testing/web'

import FrontPage from './FrontPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('FrontPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FrontPage />)
    }).not.toThrow()
  })
})
