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

import Track from './Track'

const meta: Meta<typeof Track> = {
  component: Track,
}

export default meta

type Story = StoryObj<typeof Track>

export const Primary: Story = {
  args: {
    track,
  },
}

export const WithColor: Story = {
  args: {
    track: {
      ...track,
      color: '#6e7b8b',
    },
  },
}

export const WithHeight: Story = {
  args: {
    track: {
      ...track,
      height: 100,
    },
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
