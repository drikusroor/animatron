import { IKeyframe } from './keyframe.interface'

export interface IClip {
  id: number
  keyframes: IKeyframe[]
  start: number
}
