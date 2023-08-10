import { IKeyframe } from '../../types/keyframe.interface'

interface KeyframeSpanProps {
  keyframe: IKeyframe
}

const KeyframeSpan = ({ keyframe }: KeyframeSpanProps) => {
  const spanWidth = keyframe.duration * 10 + 'px'

  return <div style={{ width: spanWidth }} className="h-2 bg-blue-400"></div>
}

export default KeyframeSpan
