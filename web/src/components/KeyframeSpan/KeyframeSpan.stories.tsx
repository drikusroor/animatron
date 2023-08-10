// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof KeyframeSpan> = (args) => {
//   return <KeyframeSpan {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import KeyframeSpan from './KeyframeSpan'

export const generated = () => {
  return <KeyframeSpan />
}

export default {
  title: 'Components/KeyframeSpan',
  component: KeyframeSpan,
} as ComponentMeta<typeof KeyframeSpan>
