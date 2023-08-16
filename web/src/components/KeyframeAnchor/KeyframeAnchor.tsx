import { IKeyframe } from '../../types/keyframe.interface'

interface KeyframeAnchorProps {
  keyframe: IKeyframe
  rounded?: boolean
  isSelected: boolean
}

const KeyframeAnchor = ({
  rounded = true,
  isSelected,
}: KeyframeAnchorProps) => {
  return (
    <div
      className={`absolute -left-2 h-4 w-4 rotate-45 cursor-pointer border border-gray-400 bg-gray-300 hover:bg-gray-200 ${
        rounded ? 'rounded-full' : ''
      } ${isSelected ? 'border-gray-100 bg-gray-200' : ''}
      `}
    ></div>
  )
}

export default KeyframeAnchor
