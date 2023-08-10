import { IKeyframe } from '../../types/keyframe.interface'

interface KeyframeAnchorProps {
  keyframe: IKeyframe
}

const KeyframeAnchor = (_props: KeyframeAnchorProps) => {
  return (
    <div className="absolute -left-2 top-2 h-4 w-4 rotate-45 cursor-pointer rounded-full border border-gray-400 bg-gray-300 hover:bg-gray-400"></div>
  )
}

export default KeyframeAnchor
