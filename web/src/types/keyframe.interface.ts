export interface IKeyframe {
  __typename?: 'AnimationTrackClipKeyframe'
  id: number
  sort: number
  duration: number
  css: string
}

export interface IKeyframeInput {
  sort: number
  duration: number
  css: string
}

export const mapKeyframeToKeyframeInput = (
  keyframe: IKeyframe
): IKeyframeInput => {
  return {
    sort: keyframe.sort,
    duration: keyframe.duration,
    css: keyframe.css,
  }
}
