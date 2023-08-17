import { create } from 'zustand'

import createAnimationSlice, { IAnimationState } from './animation'
import createEntitiesSlice, { IEntitiesState } from './entities'
import createSelectionSlice, { ISelectionState } from './selection'
import createTracksSlice, { ITracksState } from './tracks'

export type IRootState = ISelectionState &
  ITracksState &
  IEntitiesState &
  IAnimationState

export const useBoundStore = create<IRootState>((...a) => ({
  ...createSelectionSlice(...a),
  ...createTracksSlice(...a),
  ...createEntitiesSlice(...a),
  ...createAnimationSlice(...a),
}))
