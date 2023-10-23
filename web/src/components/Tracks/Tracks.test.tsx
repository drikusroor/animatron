import { render } from '@redwoodjs/testing/web'

import Tracks from './Tracks'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Tracks', () => {
  it('renders successfully', () => {
    const scrollRef = { current: document.createElement('div') }
    const handleScroll = jest.fn()

    expect(() => {
      render(<Tracks scrollRef={scrollRef} handleScroll={handleScroll} />)
    }).not.toThrow()
  })
})
