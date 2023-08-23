import { createAnimationAggregated, createEntity } from 'src/__mocks__/mockData'

// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  recentAnimations: [
    {
      id: 42,
      revisions: [
        createAnimationAggregated({
          entities: [createEntity(), createEntity()],
        }),
        createAnimationAggregated({
          entities: [createEntity(), createEntity()],
        }),
      ],
    },
    {
      id: 43,
      revisions: [
        createAnimationAggregated({
          entities: [createEntity(), createEntity()],
        }),
        createAnimationAggregated({
          entities: [createEntity(), createEntity()],
        }),
      ],
    },
    {
      id: 44,
      revisions: [
        createAnimationAggregated({
          entities: [createEntity(), createEntity()],
        }),
        createAnimationAggregated({
          entities: [createEntity(), createEntity()],
        }),
      ],
    },
  ],
})
