import { render } from '@redwoodjs/testing/web'

import Track from './Track'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Track', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Track />)
    }).not.toThrow()
  })
})
