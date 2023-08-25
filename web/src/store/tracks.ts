import { StateCreator } from 'zustand'

import { IKeyframe } from 'src/types/keyframe.interface'
import { ITrack } from 'src/types/track.interface'

import { IRootState } from '.'

export interface ITracksState {
  tracks: ITrack[]
  addTrack: (track?: ITrack) => void
  removeTrack: (track: ITrack) => void
  updateTrack: (track: ITrack) => void
  updateKeyframe: (keyframe: IKeyframe, path?: number[]) => void
  setTracks: (tracks: ITrack[]) => void
}

const createTracksSlice: StateCreator<IRootState, [], [], ITracksState> = (
  set,
  get,
  _y
) => ({
  tracks: [],
  addTrack: (input: Partial<ITrack> = {}) =>
    set((state) => {
      const track = {
        name: 'New Track',
        clips: [],
        sortNumber: get().tracks.length + 1,
        ...input,
      }

      return {
        tracks: [...state.tracks, track],
      }
    }),
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
  updateKeyframe: (updated: IKeyframe, path?: number[]) => {
    // If no path is provided, use the current selection
    if (!path) {
      const currentSelection = get().selection

      if (currentSelection.type !== 'keyframe') return

      path = currentSelection.path
    }

    set((state) => {
      const [trackIndex, clipIndex, keyframeIndex] = path

      const tracks = [...state.tracks]
      const track = tracks[trackIndex]
      const clips = [...track.clips]
      const clip = clips[clipIndex]
      const keyframes = [...clip.keyframes]
      keyframes[keyframeIndex] = updated

      clips[clipIndex] = {
        ...clip,
        keyframes,
      }

      tracks[trackIndex] = {
        ...track,
        clips,
      }

      return {
        tracks,
      }
    })
  },
  setTracks: (tracks: ITrack[]) =>
    set(() => ({
      tracks,
    })),
})

export default createTracksSlice
