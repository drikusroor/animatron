import {
  createAnimation,
  createEntity,
  createTrack,
} from 'src/__mocks__/mockData'

// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  animation: {
    ...createAnimation(),
    id: 42,
    entities: [createEntity({ id: 1 }), createEntity({ id: 2 })],
    tracks: [createTrack({ id: 1 }), createTrack({ id: 2 })],
  },
})
