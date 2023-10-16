import RecentAnimationsCell from 'src/components/RecentAnimationsCell'

const RecentAnimations = () => {
  return (
    <ul className="flex w-full flex-col gap-2 rounded-lg bg-gray-700 p-2">
      <li className="text-md mb-2 text-white">
        Recent animations for inspopiration 🧠
      </li>
      <RecentAnimationsCell />
    </ul>
  )
}

export default RecentAnimations
