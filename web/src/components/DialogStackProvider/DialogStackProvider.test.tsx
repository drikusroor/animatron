import { render } from '@redwoodjs/testing/web'

import DialogStackProvider from './DialogStackProvider'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DialogStackProvider', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DialogStackProvider />)
    }).not.toThrow()
  })
})
