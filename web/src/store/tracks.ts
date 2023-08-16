import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { ITrack } from 'src/types/track.interface'

interface ITracksState {
  tracks: ITrack[]
  addTrack: (track: ITrack) => void
  removeTrack: (track: ITrack) => void
  updateTrack: (track: ITrack) => void
  setTracks: (tracks: ITrack[]) => void
}

const useTracksStore = create<ITracksState>()(
  devtools(
    (set) => ({
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
    }),

    {
      name: 'tracks-storage',
    }
  )
)

export default useTracksStore
