import { createAnimation } from 'src/__mocks__/mockData'

// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  recentAnimations: [
    {
      id: 42,
      revisions: [createAnimation(), createAnimation()],
    },
    {
      id: 43,
      revisions: [createAnimation(), createAnimation()],
    },
    {
      id: 44,
      revisions: [createAnimation(), createAnimation()],
    },
  ],
})
