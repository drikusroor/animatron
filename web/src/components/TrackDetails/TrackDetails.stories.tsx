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

import { track } from 'src/__mocks__/mockData'

import TrackDetails from './TrackDetails'

const meta: Meta<typeof TrackDetails> = {
  component: TrackDetails,
}

export default meta

type Story = StoryObj<typeof TrackDetails>

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
