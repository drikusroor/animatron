import { StateCreator } from 'zustand'

import { ITrack } from 'src/types/track.interface'

import { IRootState } from '.'

export interface ITracksState {
  tracks: ITrack[]
  addTrack: (track: ITrack) => void
  removeTrack: (track: ITrack) => void
  updateTrack: (track: ITrack) => void
  setTracks: (tracks: ITrack[]) => void
}

const createTracksSlice: StateCreator<IRootState, [], [], ITracksState> = (
  set,
  _x,
  _y
) => ({
  tracks: [],
  addTrack: (track: ITrack) =>
    set((state) => ({
      tracks: [...state.tracks, track],
    })),
  removeTrack: (track: ITrack) =>
    set((state) => {
      const indexOf = state.tracks.indexOf(track)

      if (indexOf === -1) return state

      state.tracks.splice(indexOf, 1)
      return state
    }),
  updateTrack: (track: ITrack) =>
    set((state) => {
      const indexOf = state.tracks.indexOf(track)

      if (indexOf === -1) return state

      state.tracks[indexOf] = track
      return state
    }),
  setTracks: (tracks: ITrack[]) =>
    set(() => ({
      tracks,
    })),
})

export default createTracksSlice
