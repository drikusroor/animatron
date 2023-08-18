import { IClip, IClipInput, mapClipToClipInput } from './clip.interface'

export interface ITrack {
  __typename?: 'AnimationTrack'
  id: number
  name: string
  description?: string
  clips: IClip[]
  color?: string
  height?: number
  sortNumber: number
  createdAt: string
  updatedAt: string
}

export interface ITrackInput {
  name: string
  description?: string
  clips: IClipInput[]
  color?: string
  height?: number
  sortNumber: number
}

export const mapTrackToTrackInput = (track: ITrack): ITrackInput => {
  return {
    name: track.name,
    description: track.description,
    clips: track.clips.map(mapClipToClipInput),
    color: track.color,
    height: track.height,
    sortNumber: track.sortNumber,
  }
}
