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

import EntityEditor from './EntityEditor'

const meta: Meta<typeof EntityEditor> = {
  component: EntityEditor,
}

export default meta

type Story = StoryObj<typeof EntityEditor>

export const Primary: Story = {}
