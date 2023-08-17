import { StateCreator } from 'zustand'

import { ITrack } from 'src/types/track.interface'

import { IRootState } from '.'

type TSelectionType = 'entity' | 'track' | 'clip' | 'keyframe'

export interface ISelection {
  path: number[]
  type: TSelectionType
}

export interface ISelectionState {
  selection: ISelection | null
  select: (newSelection: ISelection | null) => void
}

const findKeyframe = (tracks: ITrack[], currentSelection: ISelection) => {
  const { path } = currentSelection

  const [trackIndex, clipIndex, keyframeIndex] = path

  const track = tracks[trackIndex]
  const clip = track.clips[clipIndex]
  const keyframe = clip.keyframes[keyframeIndex]

  return {
    track,
    clip,
    keyframe,
  }
}

const createSelectionSlice: StateCreator<
  IRootState,
  [],
  [],
  ISelectionState
> = (set, get, _y) => ({
  selection: null,
  select: (selection: ISelection) => set({ selection }),
  getSelectedItem: () => {
    const selection = get().selection

    switch (selection.type) {
      case 'keyframe':
        return findKeyframe(get().tracks, selection)
      default:
        return null
    }
  },
})

export const isSelected = (
  selection: ISelection | null,
  { path, type }: ISelection
) => {
  return !!(
    selection &&
    selection.type === type &&
    selection.path.join('-') === path.join('-')
  )
}

export default createSelectionSlice
