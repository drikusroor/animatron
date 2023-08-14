import { render } from '@redwoodjs/testing/web'

import { createEntity, createTrack } from 'src/__mocks__/mockData'

import AnimationEditor from './AnimationEditor'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AnimationEditor', () => {
  it('renders successfully', () => {
    const entities = [createEntity(), createEntity()]
    const tracks = [createTrack(), createTrack()]

    expect(() => {
      render(<AnimationEditor entities={entities} tracks={tracks} />)
    }).not.toThrow()
  })
})
