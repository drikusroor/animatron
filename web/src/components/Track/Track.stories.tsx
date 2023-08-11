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

import Track from './Track'

const meta: Meta<typeof Track> = {
  component: Track,
}

export default meta

type Story = StoryObj<typeof Track>

const track = {
  id: 1,
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
