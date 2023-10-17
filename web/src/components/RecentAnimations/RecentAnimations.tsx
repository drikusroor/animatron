import RecentAnimationsCell from 'src/components/RecentAnimationsCell'

const RecentAnimations = () => {
  const input = {
    first: 10,
  }

  return (
    <ul className="flex w-full flex-col gap-2 rounded-lg bg-gray-700 p-2">
      <li className="text-md mb-2 text-white">
        Recent animations for inspopiration 🧠
      </li>
      <RecentAnimationsCell input={input} />
    </ul>
  )
}

export default RecentAnimations
