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

import KeyframeEditor from './KeyframeEditor'

const meta: Meta<typeof KeyframeEditor> = {
  component: KeyframeEditor,
}

export default meta

type Story = StoryObj<typeof KeyframeEditor>

export const Primary: Story = {}
