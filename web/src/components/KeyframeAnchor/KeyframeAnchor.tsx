import { IKeyframe } from '../../types/keyframe.interface'

interface KeyframeAnchorProps {
  keyframe: IKeyframe
}

const KeyframeAnchor = (_props: KeyframeAnchorProps) => {
  return (
    <div className="absolute -left-2 top-2 h-4 w-4 rotate-45 bg-gray-300"></div>
  )
}

export default KeyframeAnchor
