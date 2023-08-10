// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Keyframe> = (args) => {
//   return <Keyframe {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import { IKeyframe } from 'src/types/keyframe.interface'

import Keyframe from './Keyframe'

export const generated = () => {
  const keyframe: IKeyframe = {
    id: 1,
    duration: 5,
  }

  return <Keyframe keyframe={keyframe} />
}

export default {
  title: 'Components/Keyframe',
  component: Keyframe,
} as ComponentMeta<typeof Keyframe>
