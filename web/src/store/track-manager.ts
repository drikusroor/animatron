import { StateCreator } from 'zustand'

import { IRootState } from '.'

export interface ITrackManagerState {
  zoom: number
  setZoom: (zoom: number) => void
}

const createTrackManagerSlice: StateCreator<
  IRootState,
  [],
  [],
  ITrackManagerState
> = (set) => ({
  zoom: 1,
  setZoom: (zoom: number) =>
    set(() => ({
      zoom,
    })),
})

export default createTrackManagerSlice
