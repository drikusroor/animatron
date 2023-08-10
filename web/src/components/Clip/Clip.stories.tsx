// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Clip> = (args) => {
//   return <Clip {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Clip from './Clip'

const clip = {
  id: 0,
  start: 5,
  keyframes: [
    {
      id: 1,
      duration: 5,
    },
    {
      id: 2,
      duration: 11,
    },
    {
      id: 3,
      duration: 3,
    },
    {
      id: -1,
      duration: 0,
    },
  ],
}

export const generated = () => {
  return <Clip clip={clip} />
}

export const onGrayBackground = () => {
  return (
    <div className="bg-gray-800">
      <Clip clip={clip} />
    </div>
  )
}

export default {
  title: 'Components/Clip',
  component: Clip,
} as ComponentMeta<typeof Clip>
