import { StateCreator } from 'zustand'

import { IClipInput } from 'src/types/clip.interface'
import { IKeyframe } from 'src/types/keyframe.interface'
import { ITrack, ITrackInput } from 'src/types/track.interface'

import { IRootState } from '.'

export interface ITracksState {
  tracks: ITrack[]
  addTrack: (track?: ITrack) => void
  addClip: (track?: ITrack, input: IClipInput) => void
  removeTrack: (track: ITrack) => void
  updateTrack: (track: ITrack, update: ITrackInput) => void
  updateClip: (track: ITrack, clip: IClipInput) => void
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
  addClip: (track: ITrack, input: IClipInput) =>
    set((state) => {
      const indexOf = state.tracks.indexOf(track)

      if (indexOf === -1) return state

      const sanitizedInput: IClipInput = {
        ...input,
        start: Math.round(input.start),
      }

      const tracks = [...state.tracks]
      tracks[indexOf] = { ...track, clips: [...track.clips, sanitizedInput] }

      state.tracks = tracks

      return {
        ...state,
        tracks,
      }
    }),

  removeTrack: (track: ITrack) =>
    set((state) => {
      return {
        ...state,
        tracks: state.tracks.filter((t) => t !== track),
      }
    }),
  updateTrack: (track: ITrack, update: Partial<ITrackInput> = {}) =>
    set((state) => {
      const indexOf = state.tracks.indexOf(track)

      if (indexOf === -1) return state

      const tracks = state.tracks
      tracks[indexOf] = { ...track, ...update }

      return {
        ...state,
        tracks,
      }
    }),
  updateClip: (track: ITrack, clip: IClipInput) =>
    set((state) => {
      const indexOf = state.tracks.indexOf(track)

      if (indexOf === -1) return state

      const tracks = [...state.tracks]
      const clips = [...tracks[indexOf].clips]
      const clipIndex = clips.findIndex((c) => c.id === clip.id)

      if (clipIndex === -1) return state

      clips[clipIndex] = clip

      tracks[indexOf] = {
        ...track,
        clips,
      }

      return {
        ...state,
        tracks,
      }
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
