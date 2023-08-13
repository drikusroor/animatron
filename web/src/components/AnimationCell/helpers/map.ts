import { FindAnimationQuery } from 'types/graphql'

export function mapAnimationQueryData(queryData: FindAnimationQuery) {
  const { animation } = queryData
  const entities = animation.entities
  const tracks = animation.tracks

  return {
    animation,
    entities,
    tracks,
  }
}
