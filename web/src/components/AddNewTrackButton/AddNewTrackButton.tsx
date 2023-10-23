import { FaPlusCircle } from 'react-icons/fa'

interface IAddNewTrackButtonProps {
  onClick: () => void
}

const AddNewTrackButton = ({ onClick }: IAddNewTrackButtonProps) => {
  return (
    <button
      className="flex h-8 w-32 flex-row items-center gap-2 border-t border-gray-500 bg-gray-700 px-2 text-sm transition hover:bg-gray-600"
      title="Add new track"
      aria-label="Add new track"
      onClick={onClick}
    >
      <FaPlusCircle />
      <span className="whitespace-nowrap">New track</span>
    </button>
  )
}

export default AddNewTrackButton
