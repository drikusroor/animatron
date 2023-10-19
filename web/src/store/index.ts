import { create } from 'zustand'

import createAnimationSlice, { IAnimationState } from './animation'
import createDialogsSlice, { IDialogsState } from './dialog'
import createEntitiesSlice, { IEntitiesState } from './entities'
import createSelectionSlice, { ISelectionState } from './selection'
import createTrackManagerSlice, { ITrackManagerState } from './track-manager'
import createTracksSlice, { ITracksState } from './tracks'

export type IRootState = ISelectionState &
  IAnimationState &
  IDialogsState &
  IEntitiesState &
  ITrackManagerState &
  ITracksState

export const useBoundStore = create<IRootState>((...a) => ({
  ...createSelectionSlice(...a),
  ...createTracksSlice(...a),
  ...createEntitiesSlice(...a),
  ...createAnimationSlice(...a),
  ...createTrackManagerSlice(...a),
  ...createDialogsSlice(...a),
}))
