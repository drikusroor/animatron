import type { Prisma, AnimationTrackClip } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.AnimationTrackClipCreateArgs>({
  animationTrackClip: {
    one: {
      data: {
        start: 8537544,
        track: {
          create: {
            name: 'String',
            updatedAt: '2023-08-12T22:04:43.136Z',
            sortNumber: 7011008,
            revision: {
              create: {
                name: 'String',
                version: 8266952,
                updatedAt: '2023-08-12T22:04:43.136Z',
                AnimationHistory: {
                  create: {
                    name: 'String',
                    uuid: 'String6897591',
                    updatedAt: '2023-08-12T22:04:43.136Z',
                  },
                },
              },
            },
          },
        },
        entity: {
          create: {
            name: 'String',
            updatedAt: '2023-08-12T22:04:43.136Z',
            image: 'String',
            html: 'String',
            css: 'String',
            revision: {
              create: {
                name: 'String',
                version: 5123486,
                updatedAt: '2023-08-12T22:04:43.136Z',
                AnimationHistory: {
                  create: {
                    name: 'String',
                    uuid: 'String4749407',
                    updatedAt: '2023-08-12T22:04:43.137Z',
                  },
                },
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        start: 536035,
        track: {
          create: {
            name: 'String',
            updatedAt: '2023-08-12T22:04:43.137Z',
            sortNumber: 9461290,
            revision: {
              create: {
                name: 'String',
                version: 6094408,
                updatedAt: '2023-08-12T22:04:43.137Z',
                AnimationHistory: {
                  create: {
                    name: 'String',
                    uuid: 'String3860053',
                    updatedAt: '2023-08-12T22:04:43.137Z',
                  },
                },
              },
            },
          },
        },
        entity: {
          create: {
            name: 'String',
            updatedAt: '2023-08-12T22:04:43.137Z',
            image: 'String',
            html: 'String',
            css: 'String',
            revision: {
              create: {
                name: 'String',
                version: 8175445,
                updatedAt: '2023-08-12T22:04:43.137Z',
                AnimationHistory: {
                  create: {
                    name: 'String',
                    uuid: 'String7037791',
                    updatedAt: '2023-08-12T22:04:43.137Z',
                  },
                },
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  AnimationTrackClip,
  'animationTrackClip'
>
