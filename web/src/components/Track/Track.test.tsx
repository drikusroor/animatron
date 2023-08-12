import { render } from '@redwoodjs/testing/web'

import { track } from 'src/__mocks__/mockData'

import Track from './Track'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Track', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Track track={track} />)
    }).not.toThrow()
  })
})
