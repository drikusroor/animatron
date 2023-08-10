import { render } from '@redwoodjs/testing/web'

import Clip from './Clip'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Clip', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Clip />)
    }).not.toThrow()
  })
})
