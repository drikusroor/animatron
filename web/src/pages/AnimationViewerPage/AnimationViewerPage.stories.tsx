import type { Meta, StoryObj } from '@storybook/react'

import AnimationViewerPage from './AnimationViewerPage'

const meta: Meta<typeof AnimationViewerPage> = {
  component: AnimationViewerPage,
}

export default meta

type Story = StoryObj<typeof AnimationViewerPage>

export const Primary: Story = {}
