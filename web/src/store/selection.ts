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

export interface ISelectedEntity {
  entity: IEntity
}

export interface ISelectedClip {
  track: ITrack
  clip: IClip
}

export interface ISelectedKeyframe {
  track: ITrack
  clip: IClip
  keyframe: IKeyframe
}

export interface ISelectionState {
  selection: ISelection | null
  select: (newSelection: ISelection | null) => void
  getSelectedItem: () => ISelectedEntity | ISelectedKeyframe
  getSelectedTrack: () => ITrack
  getSelectedClip: () => ISelectedClip
}

const findEntity = (entities: IEntity[], currentSelection: ISelection) => {
  const { path } = currentSelection

  const [entityIndex] = path

  const entity = entities[entityIndex]

  return {
    entity,
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
  getSelectedTrack: () => {
    const selection = get().selection

    if (selection?.type !== 'track') {
      return null
    }

    const [trackIndex] = selection.path

    return get().tracks[trackIndex]
  },
  getSelectedClip: () => {
    const selection = get().selection

    if (selection?.type !== 'clip') {
      return null
    }

    const [trackIndex, clipIndex] = selection.path

    const track = get().tracks[trackIndex]

    const clip = get().tracks[trackIndex].clips[clipIndex]

    return {
      track,
      clip,
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
