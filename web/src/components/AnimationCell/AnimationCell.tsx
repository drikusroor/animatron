import type {
  FindAnimationQuery,
  FindAnimationQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import useAnimationStore from 'src/store/animation'
import useEntitiesStore from 'src/store/entities'
import useTracksStore from 'src/store/tracks'

import AnimationEditor from '../AnimationEditor/AnimationEditor'

import { mapAnimationQueryData } from './helpers/map'

export const QUERY = gql`
  query FindAnimationQuery($id: Int!) {
    animation: animation(id: $id) {
      id
      name
      description
      animationHistoryId
      version
      createdAt
      updatedAt

      entities {
        id
        name
        description
        createdAt
        updatedAt
        image
        html
        css
      }

      tracks {
        id
        name
        description
        createdAt
        updatedAt
        sortNumber
        color

        clips {
          id
          uuid
          start
          animationTrackId
          animationEntityId

          keyframes {
            id
            uuid
            sort
            duration
            css
          }
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindAnimationQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = (
  queryData: CellSuccessProps<FindAnimationQuery, FindAnimationQueryVariables>
) => {
  const setAnimation = useAnimationStore((state) => state.setAnimation)
  const setEntities = useEntitiesStore((state) => state.setEntities)
  const setTracks = useTracksStore((state) => state.setTracks)

  const { animation, entities, tracks } = mapAnimationQueryData(queryData)

  setAnimation(animation)
  setEntities(entities)
  setTracks(tracks)

  return <AnimationEditor entities={entities} tracks={tracks} />
}
