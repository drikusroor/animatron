import { IEntity } from './entity.interface'
import { ITrack } from './track.interface'

export interface IAnimation {
  id: number
  name: string
  description?: string
  animationHistoryId: number
  version: number
  createdAt: string
  updatedAt: string
}

export interface IAnimationAggregated extends IAnimation {
  entities: IEntity[]
  tracks: ITrack[]
}
