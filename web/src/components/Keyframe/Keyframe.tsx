import useSelectionStore from 'src/store/selection'

import { IKeyframe } from '../../types/keyframe.interface'
import KeyframeAnchor from '../KeyframeAnchor/KeyframeAnchor'
import KeyframeSpan from '../KeyframeSpan/KeyframeSpan'

interface KeyframeProps {
  keyframe: IKeyframe
  index: number
}

const Keyframe = ({ keyframe, index }: KeyframeProps) => {
  const selected = useSelectionStore((state) => state.selection)

  const _isSelected = selected.type === 'keyframe' && selected.id === index

  return (
    <div className="relative flex flex-row items-center">
      <KeyframeAnchor keyframe={keyframe} />
      {keyframe.duration > 0 && <KeyframeSpan keyframe={keyframe} />}
    </div>
  )
}

export default Keyframe
