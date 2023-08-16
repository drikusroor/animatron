import { IKeyframe } from '../../types/keyframe.interface'

interface KeyframeSpanProps {
  keyframe: IKeyframe
  isSelected: boolean
}

const KeyframeSpan = ({ keyframe, isSelected }: KeyframeSpanProps) => {
  const spanWidth = keyframe.duration * 10 + 'px'

  return (
    <div
      style={{ width: spanWidth }}
      className={`h-2 bg-blue-400 ${
        isSelected ? 'border border-blue-100 bg-blue-300' : ''
      }`}
    />
  )
}

export default KeyframeSpan
