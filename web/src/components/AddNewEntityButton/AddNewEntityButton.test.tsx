import { render } from '@redwoodjs/testing/web'

import AddNewEntityButton from './AddNewEntityButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AddNewEntityButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AddNewEntityButton />)
    }).not.toThrow()
  })
})
