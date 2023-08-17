import { IKeyframe } from '../../types/keyframe.interface'

interface KeyframeSpanProps {
  keyframe: IKeyframe
  isSelected: boolean
  zoom: number
}

const KeyframeSpan = ({ keyframe, isSelected, zoom }: KeyframeSpanProps) => {
  const spanWidth = keyframe.duration * zoom + 'px'

  console.log({ spanWidth, keyframe, isSelected, zoom })

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
