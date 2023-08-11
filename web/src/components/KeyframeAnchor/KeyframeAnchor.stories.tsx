// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof KeyframeAnchor> = (args) => {
//   return <KeyframeAnchor {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import { keyframe } from 'src/__mocks__/mockData'

import KeyframeAnchor from './KeyframeAnchor'

export const generated = () => {
  return <KeyframeAnchor keyframe={keyframe} />
}

export default {
  title: 'Components/KeyframeAnchor',
  component: KeyframeAnchor,
} as ComponentMeta<typeof KeyframeAnchor>
