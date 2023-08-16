import { render } from '@redwoodjs/testing/web'

import { clip } from 'src/__mocks__/mockData'

import Clip from './Clip'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Clip', () => {
  it('renders successfully', () => {
    const path = [0, 0]
    const select = jest.fn()
    const selection = null

    expect(() => {
      render(
        <Clip clip={clip} path={path} select={select} selection={selection} />
      )
    }).not.toThrow()
  })
})
