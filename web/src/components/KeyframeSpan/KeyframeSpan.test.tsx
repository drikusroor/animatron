import { render } from '@redwoodjs/testing/web'

import { createKeyframe } from 'src/__mocks__/mockData'

import KeyframeSpan from './KeyframeSpan'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('KeyframeSpan', () => {
  it('renders successfully', () => {
    expect(() => {
      const keyframe = createKeyframe()
      const isSelected = false
      const zoom = 1

      render(
        <KeyframeSpan keyframe={keyframe} isSelected={isSelected} zoom={zoom} />
      )
    }).not.toThrow()
  })
})
