// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import ClipEditor from './ClipEditor'

const meta: Meta<typeof ClipEditor> = {
  component: ClipEditor,
}

export default meta

type Story = StoryObj<typeof ClipEditor>

export const Primary: Story = {}
