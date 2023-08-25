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

import AddNewTrackButton from './AddNewTrackButton'

const meta: Meta<typeof AddNewTrackButton> = {
  component: AddNewTrackButton,
}

export default meta

type Story = StoryObj<typeof AddNewTrackButton>

export const Primary: Story = {}
