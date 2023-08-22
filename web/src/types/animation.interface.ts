import {
  IEntity,
  IEntityInput,
  mapEntityToEntityInput,
} from './entity.interface'
import { ITrack, ITrackInput, mapTrackToTrackInput } from './track.interface'

export interface IAnimation {
  __typename?: string
  id: number
  name: string
  description?: string
  animationHistoryId: string
  version: number
  createdAt: string
  updatedAt: string
}

export interface IAnimationAggregated extends IAnimation {
  entities: IEntity[]
  tracks: ITrack[]
}

export interface IAnimationInput {
  name: string
  description?: string
  animationHistoryId: number
  version: number
  entities: IEntityInput[]
  tracks: ITrackInput[]
}

export const mapAnimationToAnimationAggregated = (
  animation: IAnimation,
  entities: IEntity[],
  tracks: ITrack[]
): IAnimationAggregated => {
  return {
    ...animation,
    entities,
    tracks,
  }
}

export const mapAnimationAggregatedToAnimationInput = (
  animation: IAnimationAggregated
): IAnimationInput => {
  return {
    name: animation.name,
    description: animation.description,
    animationHistoryId: animation.animationHistoryId,
    version: animation.version,
    entities: animation.entities.map(mapEntityToEntityInput),
    tracks: animation.tracks.map(mapTrackToTrackInput),
  }
}
