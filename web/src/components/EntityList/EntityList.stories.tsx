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

import EntityList from './EntityList'

const meta: Meta<typeof EntityList> = {
  component: EntityList,
}

export default meta

type Story = StoryObj<typeof EntityList>

export const Primary: Story = {}
