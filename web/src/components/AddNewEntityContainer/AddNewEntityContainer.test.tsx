import { render } from '@redwoodjs/testing/web'

import AddNewEntityContainer from './AddNewEntityContainer'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AddNewEntityContainer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AddNewEntityContainer />)
    }).not.toThrow()
  })
})
