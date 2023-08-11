// Pass props to your component by passing an `args` object to your story
//
// ```jsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import { createTrack } from 'src/__mocks__/mockData'

import TrackManager from './TrackManager'

const meta: Meta<typeof TrackManager> = {
  component: TrackManager,
}

export default meta

type Story = StoryObj<typeof TrackManager>

export const Primary: Story = {
  args: {
    tracks: [
      createTrack({
        id: 1,
        name: 'Track 1',
        color: '#ff0000',
      }),
      createTrack({
        id: 2,
        name: 'Track 2',
        color: '#00ff00',
      }),
      createTrack({
        id: 3,
        name: 'Track 3',
        color: '#0000ff',
      }),
    ],
  },
}

export const WithSmallContainer: Story = {
  args: {
    tracks: [
      createTrack({
        id: 1,
        name: 'Track 1',
        color: '#fff',
      }),
      createTrack({
        id: 1,
        name: 'Track 1',
        color: '#ff0000',
      }),
      createTrack({
        id: 2,
        name: 'Track 2',
        color: '#00ff00',
      }),
      createTrack({
        id: 3,
        name: 'Track 3',
        color: '#0000ff',
      }),
      ...new Array(100).fill(null).map((_, i) =>
        createTrack({
          id: i + 4,
          name: `Track ${i + 4}`,
        })
      ),
    ],
  },
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '720px', height: '240px', overflow: 'auto' }}>
        <Story />
      </div>
    ),
  ],
}
