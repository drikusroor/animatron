import { render } from '@redwoodjs/testing/web'

import StartAnimatingSaga from './StartAnimatingSaga'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('StartAnimatingSaga', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StartAnimatingSaga />)
    }).not.toThrow()
  })
})
