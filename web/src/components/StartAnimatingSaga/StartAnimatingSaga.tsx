import { navigate, routes } from "@redwoodjs/router"
import { useMutation } from "@redwoodjs/web"

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

  const [createAnimationHistoryForStartAnimating, { loading, error }] = useMutation(
    UPDATE_ANIMATION_MUTATION,
    {
      onCompleted: (data) => {
        const {id , revisions: [{version}]} = data.createAnimationHistoryForStartAnimating
        navigate(routes.animation({ animationHistoryId: id, version }))
      },
      onError: (error) => {
        console.log("onError")
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
      <div
        className="inline-block group-hover:scale-110 group-hover:rotate-12 transition-transform"
      >💪</div>
    </button>
  )
}

export default StartAnimatingSaga
