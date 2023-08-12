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

import AnimationViewer from './AnimationViewer'

const meta: Meta<typeof AnimationViewer> = {
  component: AnimationViewer,
}

export default meta

type Story = StoryObj<typeof AnimationViewer>

export const Primary: Story = {}
