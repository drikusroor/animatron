import { FaPlusCircle } from 'react-icons/fa'

interface IAddNewEntityButtonProps {
  onClick: () => void
}

const AddNewEntityButton = ({ onClick }: IAddNewEntityButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="flex w-full flex-row items-center gap-2 rounded-lg bg-amber-400 px-4 py-2 font-bold uppercase text-gray-800 transition-colors duration-200 ease-in-out hover:bg-amber-500"
    >
      <FaPlusCircle />
      Add new entity
    </button>
  )
}

export default AddNewEntityButton
