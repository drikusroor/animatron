import { IClip } from './clip.interface'

export interface ITrack {
  id: number
  clips: IClip[]
  color?: string
  height?: number
}
