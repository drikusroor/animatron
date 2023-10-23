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

import ClipEditorContainer from './ClipEditorContainer'

const meta: Meta<typeof ClipEditorContainer> = {
  component: ClipEditorContainer,
}

export default meta

type Story = StoryObj<typeof ClipEditorContainer>

export const Primary: Story = {}
