import { render } from '@redwoodjs/testing/web'

import { track } from 'src/__mocks__/mockData'

import Track from './Track'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Track', () => {
  it('renders successfully', () => {
    const path = [0]
    const select = jest.fn()
    const selection = null

    expect(() => {
      render(
        <Track
          track={track}
          path={path}
          select={select}
          selection={selection}
        />
      )
    }).not.toThrow()
  })
})
