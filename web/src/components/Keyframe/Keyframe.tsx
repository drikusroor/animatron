import { ISelection, isSelected } from 'src/store/selection'

import { IKeyframe } from '../../types/keyframe.interface'
import KeyframeAnchor from '../KeyframeAnchor/KeyframeAnchor'
import KeyframeSpan from '../KeyframeSpan/KeyframeSpan'

interface KeyframeProps {
  keyframe: IKeyframe
  path: number[]
  select: (selection: ISelection) => void
  selection: ISelection
}

const Keyframe = ({ keyframe, path, select, selection }: KeyframeProps) => {
  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      event.stopPropagation()
      select({ type: 'keyframe', path })
    }
  }

  const onClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault()
    event.stopPropagation()
    select({ type: 'keyframe', path })
  }

  return (
    <div
      className="relative flex flex-row items-center"
      onClick={onClick}
      onKeyDown={onKeyDown}
      role="option"
      aria-selected={isSelected(selection, {
        path,
        type: 'keyframe',
      })}
      aria-label={`Select keyframe at ${keyframe.duration}s`}
      tabIndex={0}
    >
      <KeyframeAnchor
        keyframe={keyframe}
        isSelected={isSelected(selection, { path, type: 'keyframe' })}
      />
      {keyframe.duration > 0 && (
        <KeyframeSpan
          keyframe={keyframe}
          isSelected={isSelected(selection, { path, type: 'keyframe' })}
        />
      )}
    </div>
  )
}

export default Keyframe
