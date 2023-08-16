import { ISelection } from 'src/store/selection'

import { IKeyframe } from '../../types/keyframe.interface'
import KeyframeAnchor from '../KeyframeAnchor/KeyframeAnchor'
import KeyframeSpan from '../KeyframeSpan/KeyframeSpan'

interface KeyframeProps {
  keyframe: IKeyframe
  path: number[]
  select: (selection: ISelection) => void
  selection: ISelection
}

const Keyframe = ({ keyframe }: KeyframeProps) => {
  return (
    <div className="relative flex flex-row items-center">
      <KeyframeAnchor keyframe={keyframe} />
      {keyframe.duration > 0 && <KeyframeSpan keyframe={keyframe} />}
    </div>
  )
}

export default Keyframe
