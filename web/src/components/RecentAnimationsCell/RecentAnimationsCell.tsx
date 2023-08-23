import type { RecentAnimationsQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import EntityRenderer from '../EntityRenderer/EntityRenderer'

export const QUERY = gql`
  query RecentAnimationsQuery {
    recentAnimations: animationHistories {
      id
      name

      revisions {
        id
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
    <ul className="w-full rounded-lg bg-slate-600 p-2">
      <li className="mb-2 text-lg font-bold text-white">Inspopirations</li>
      {recentAnimations.map((item) => {
        return (
          <li key={item.id}>
            <a
              href={`/animation/${item.id}/${item.revisions[0].version}`}
              className="flex items-center justify-between gap-2 rounded-lg bg-slate-500 p-2 transition-colors duration-200 ease-in-out hover:bg-slate-700"
            >
              <div className="flex items-center gap-2">
                <EntityRenderer
                  entity={item.revisions[item.revisions.length - 1].entities[0]}
                />
                <span className="text-sm text-white">{item.name}</span>
              </div>
              <span className="text-sm text-gray-400">
                {timeAgo(
                  new Date(item.revisions[item.revisions.length - 1].updatedAt)
                )}{' '}
                ago
              </span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}