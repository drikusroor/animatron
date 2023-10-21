import { StateCreator } from 'zustand'

import { IClip } from 'src/types/clip.interface'
import { IEntity } from 'src/types/entity.interface'
import { IKeyframe } from 'src/types/keyframe.interface'
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
  getSelectedItem: () =>
    | { entity: IEntity }
    | { track: ITrack }
    | { track: ITrack; clip: IClip }
    | { track: ITrack; clip: IClip; keyframe: IKeyframe }
}

const findEntity = (entities: IEntity[], currentSelection: ISelection) => {
  const { path } = currentSelection

  const [entityIndex] = path

  const entity = entities[entityIndex]

  return {
    entity,
  }
}

const findTrack = (entities: ITrack[], currentSelection: ISelection) => {
  const { path } = currentSelection

  const [trackIndex] = path

  const track = entities[trackIndex]

  return {
    track,
  }
}

const findClip = (tracks: ITrack[], currentSelection: ISelection) => {
  const { path } = currentSelection

  const [trackIndex, clipIndex] = path

  const track = tracks[trackIndex]
  const clip = track.clips[clipIndex]

  return {
    track,
    clip,
  }
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
      case 'entity':
        return findEntity(get().entities, selection)
      case 'track':
      case 'clip':
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
