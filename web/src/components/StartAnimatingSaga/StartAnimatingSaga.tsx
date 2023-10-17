import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

const UPDATE_ANIMATION_MUTATION = gql`
  mutation CreateAnimationHistoryForStartAnimatingMutation {
    createAnimationHistoryForStartAnimating {
      id
      revisions {
        version
      }
    }
  }
`

const StartAnimatingSaga = () => {
  const [createAnimationHistoryForStartAnimating, { loading }] = useMutation(
    UPDATE_ANIMATION_MUTATION,
    {
      onCompleted: (data) => {
        const {
          id,
          revisions: [{ version }],
        } = data.createAnimationHistoryForStartAnimating
        navigate(routes.animation({ animationHistoryId: id, version }))
      },
      onError: () => {
        console.log('onError')
      },
    }
  )

  return (
    <button
      className="rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
      title="Start animating"
      aria-label="Start animating"
      onClick={() => createAnimationHistoryForStartAnimating()}
      disabled={loading}
    >
      Start animating&nbsp;
      <div className="inline-block transition-transform group-hover:rotate-12 group-hover:scale-110">
        💪
      </div>
    </button>
  )
}

export default StartAnimatingSaga
