import { createAnimationAggregated, createEntity } from 'src/__mocks__/mockData'

// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  recentAnimations: [
    createAnimationAggregated({
      id: 42,
      entities: [createEntity(), createEntity()],
    }),
    createAnimationAggregated({
      id: 43,
      entities: [createEntity(), createEntity()],
    }),
    createAnimationAggregated({
      id: 44,
      entities: [createEntity(), createEntity()],
    }),
  ],
})
