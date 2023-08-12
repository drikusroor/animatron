import type { Prisma, AnimationTrackKeyframe } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.AnimationTrackKeyframeCreateArgs>(
  {
    animationTrackKeyframe: {
      one: { data: { sort: 8276859, duration: 4047862, css: 'String' } },
      two: { data: { sort: 6845423, duration: 9888373, css: 'String' } },
    },
  }
)

export type StandardScenario = ScenarioData<
  AnimationTrackKeyframe,
  'animationTrackKeyframe'
>
