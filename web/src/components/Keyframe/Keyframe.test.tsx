import { render } from '@redwoodjs/testing/web'

import { keyframe } from 'src/__mocks__/mockData'

import Keyframe from './Keyframe'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Keyframe', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Keyframe keyframe={keyframe} />)
    }).not.toThrow()
  })
})
