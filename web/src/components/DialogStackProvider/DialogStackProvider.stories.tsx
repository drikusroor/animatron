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

import DialogStackProvider from './DialogStackProvider'

const meta: Meta<typeof DialogStackProvider> = {
  component: DialogStackProvider,
}

export default meta

type Story = StoryObj<typeof DialogStackProvider>

export const Primary: Story = {}
