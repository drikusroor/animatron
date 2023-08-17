import { render } from '@redwoodjs/testing/web'

import { createKeyframe } from 'src/__mocks__/mockData'

import KeyframeEditor from './KeyframeEditor'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('KeyframeEditor', () => {
  it('renders successfully', () => {
    const keyframe = createKeyframe()
    const deselectKeyframe = jest.fn()
    const updateKeyframe = jest.fn()

    expect(() => {
      render(
        <KeyframeEditor
          keyframe={keyframe}
          deselectKeyframe={deselectKeyframe}
          updateKeyframe={updateKeyframe}
        />
      )
    }).not.toThrow()
  })
})
