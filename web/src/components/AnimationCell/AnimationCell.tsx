import type {
  FindAnimationQuery,
  FindAnimationQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindAnimationQuery($id: Int!) {
    animation: animation(id: $id) {
      id
      name
      description
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

export const Success = ({
  animation,
}: CellSuccessProps<FindAnimationQuery, FindAnimationQueryVariables>) => {
  return <pre>{JSON.stringify(animation, null, 2)}</pre>
}
