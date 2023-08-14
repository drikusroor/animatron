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

import AnimationEditor from './AnimationEditor'

const meta: Meta<typeof AnimationEditor> = {
  component: AnimationEditor,
}

export default meta

type Story = StoryObj<typeof AnimationEditor>

export const Primary: Story = {}
