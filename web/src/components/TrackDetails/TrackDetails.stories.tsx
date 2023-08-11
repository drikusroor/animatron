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

import TrackDetails from './TrackDetails'

const meta: Meta<typeof TrackDetails> = {
  component: TrackDetails,
}

export default meta

type Story = StoryObj<typeof TrackDetails>

const track = {
  id: 1,
  name: 'Track 1',
  clips: [
    {
      id: 1,
      start: 0,
      keyframes: [
        {
          id: 1,
          duration: 20,
        },
      ],
    },
    {
      id: 1,
      start: 25,
      keyframes: [
        {
          id: 1,
          duration: 10,
        },
        {
          id: 1,
          duration: 10,
        },
      ],
    },
  ],
}

export const Primary: Story = {
  args: {
    track,
  },
}

export const WithLongName: Story = {
  args: {
    track: {
      ...track,
      name: 'This is a very long track name',
    },
  },
}
