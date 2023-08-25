import type { RecentAnimationsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import EntityRenderer from '../EntityRenderer/EntityRenderer'

export const QUERY = gql`
  query RecentAnimationsQuery {
    recentAnimations {
      id
      animationHistoryId
      name
      version
      createdAt
      updatedAt

      entities {
        html
        css
        image
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  recentAnimations,
}: CellSuccessProps<RecentAnimationsQuery>) => {
  const timeAgo = (date: Date) => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000)
    let interval = seconds / 31536000

    if (interval > 1) {
      return Math.floor(interval) + ' years'
    }
    interval = seconds / 2592000
    if (interval > 1) {
      return Math.floor(interval) + ' months'
    }
    interval = seconds / 86400
    if (interval > 1) {
      return Math.floor(interval) + ' days'
    }
    interval = seconds / 3600
    if (interval > 1) {
      return Math.floor(interval) + ' hours'
    }
    interval = seconds / 60
    if (interval > 1) {
      return Math.floor(interval) + ' minutes'
    }
    return Math.floor(seconds) + ' seconds'
  }

  return (
    <ul className="flex w-full flex-col gap-2 rounded-lg bg-gray-700 p-2">
      <li className="text-md mb-2 text-white">
        Recent animations for inspopiration 🧠
      </li>
      {recentAnimations.map((item) => {
        const entity = item.entities[0]

        return (
          <li key={item.id}>
            <a
              href={`/animation/${item.animationHistoryId}/${item.version}`}
              className="flex items-center justify-between gap-2 rounded-lg bg-gray-600 p-2 transition-colors duration-200 ease-in-out hover:bg-gray-500"
            >
              <div className="flex items-center gap-2">
                {entity ? (
                  <EntityRenderer entity={entity} />
                ) : (
                  <div className="h-8 w-8 rounded-full bg-gray-400"></div>
                )}
                <span className="text-sm text-white">{item.name}</span>
              </div>
              <span className="text-sm text-gray-400">
                {timeAgo(new Date(item.updatedAt))} ago
              </span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
