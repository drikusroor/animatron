import type { Prisma, AnimationTrack } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.AnimationTrackCreateArgs>({
  animationTrack: {
    one: {
      data: {
        name: 'String',
        updatedAt: '2023-08-12T22:04:26.586Z',
        sortNumber: 9501220,
        revision: {
          create: {
            name: 'String',
            version: 7605887,
            updatedAt: '2023-08-12T22:04:26.586Z',
            AnimationHistory: {
              create: {
                name: 'String',
                uuid: 'String1596379',
                updatedAt: '2023-08-12T22:04:26.586Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        updatedAt: '2023-08-12T22:04:26.586Z',
        sortNumber: 4059977,
        revision: {
          create: {
            name: 'String',
            version: 2205826,
            updatedAt: '2023-08-12T22:04:26.586Z',
            AnimationHistory: {
              create: {
                name: 'String',
                uuid: 'String1328179',
                updatedAt: '2023-08-12T22:04:26.586Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<AnimationTrack, 'animationTrack'>
