import { IKeyframe } from '../../types/keyframe.interface'

interface KeyframeAnchorProps {
  keyframe: IKeyframe
  rounded?: boolean
}

const KeyframeAnchor = ({ rounded = true }: KeyframeAnchorProps) => {
  return (
    <div
      className={`absolute -left-2 top-2 h-4 w-4 rotate-45 cursor-pointer border border-gray-400 bg-gray-300 hover:bg-gray-400 ${
        rounded ? 'rounded-full' : ''
      }`}
    ></div>
  )
}

export default KeyframeAnchor
