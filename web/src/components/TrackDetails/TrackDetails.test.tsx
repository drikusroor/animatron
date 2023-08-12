import { render } from '@redwoodjs/testing/web'

import { track } from 'src/__mocks__/mockData'

import TrackDetails from './TrackDetails'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TrackDetails', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TrackDetails track={track} />)
    }).not.toThrow()
  })
})
