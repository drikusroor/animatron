import {
  IKeyframe,
  IKeyframeInput,
  mapKeyframeToKeyframeInput,
} from './keyframe.interface'

export interface IClip {
  __typename?: 'AnimationTrackClip'
  id?: number
  keyframes: IKeyframe[]
  start: number
  animationEntityId?: number
  animationEntityUuid?: string
}

export interface IClipInput {
  keyframes: IKeyframeInput[]
  start: number
  animationEntityId?: number
  animationEntityUuid?: string
}

export const mapClipToClipInput = (clip: IClip): IClipInput => {
  return {
    keyframes: clip.keyframes.map(mapKeyframeToKeyframeInput),
    start: clip.start,
    animationEntityUuid: clip.animationEntityUuid,
  }
}
