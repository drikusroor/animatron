import { render } from '@redwoodjs/testing/web'

import { keyframe } from 'src/__mocks__/mockData'

import KeyframeAnchor from './KeyframeAnchor'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('KeyframeAnchor', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<KeyframeAnchor keyframe={keyframe} />)
    }).not.toThrow()
  })
})
