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

import RecentAnimations from './RecentAnimations'

const meta: Meta<typeof RecentAnimations> = {
  component: RecentAnimations,
}

export default meta

type Story = StoryObj<typeof RecentAnimations>

export const Primary: Story = {}
