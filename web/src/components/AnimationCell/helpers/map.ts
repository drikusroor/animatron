import { FindAnimationQuery } from 'types/graphql'

export function mapAnimationQueryData(queryData: FindAnimationQuery) {
  const { animation } = queryData
  const entities = animation.entities
  const tracks = animation.tracks.map((track) => {
    const clips = track.clips.map((clip) => {
      const parentUuid = entities.find(
        (entity) => entity.id === clip.animationEntityId
      )?.uuid
      return {
        ...clip,
        animationEntityUuid: parentUuid,
      }
    })

    return {
      ...track,
      clips,
    }
  })

  return {
    animation,
    entities,
    tracks,
  }
}
