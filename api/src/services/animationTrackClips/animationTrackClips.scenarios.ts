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
                    id: 'e8d7f0b0-0b1a-4b0e-9b0a-3b0a9b0a9b0a',
                    name: 'String',
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
                    id: 'e8d7f0b0-0b1a-4b0e-9b0a-4b0a9b0a9b0b',
                    name: 'String',
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
                    id: 'e8d7f0b0-0b1a-4b0e-9b0a-5b0a9b0a9b0a',
                    name: 'String',
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
                    id: 'e8d7f0b0-0b1a-4b0e-9b0a-6b0a9b0a9b0b',
                    name: 'String',
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
