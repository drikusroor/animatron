import { render } from '@redwoodjs/testing/web'

import { clip } from 'src/__mocks__/mockData'

import Clip from './Clip'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Clip', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Clip clip={clip} />)
    }).not.toThrow()
  })
})
