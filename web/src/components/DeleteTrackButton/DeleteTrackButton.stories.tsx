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

import DeleteTrackButton from './DeleteTrackButton'

const meta: Meta<typeof DeleteTrackButton> = {
  component: DeleteTrackButton,
}

export default meta

type Story = StoryObj<typeof DeleteTrackButton>

export const Primary: Story = {}
