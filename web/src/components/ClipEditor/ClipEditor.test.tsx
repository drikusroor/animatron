import { render } from '@redwoodjs/testing/web'

import { IClip } from 'src/types/clip.interface'

import ClipEditor from './ClipEditor'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ClipEditor', () => {
  it('renders successfully', () => {
    const clip: IClip = { id: 1, start: 0, keyframes: [] }
    const updateClip = jest.fn()
    const deselectClip = jest.fn()

    expect(() => {
      render(
        <ClipEditor
          clip={clip}
          updateClip={updateClip}
          deselectClip={deselectClip}
        />
      )
    }).not.toThrow()
  })
})
