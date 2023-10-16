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

import StartAnimatingSaga from './StartAnimatingSaga'

const meta: Meta<typeof StartAnimatingSaga> = {
  component: StartAnimatingSaga,
}

export default meta

type Story = StoryObj<typeof StartAnimatingSaga>

export const Primary: Story = {}
