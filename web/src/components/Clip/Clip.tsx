import { ISelection, isSelected } from 'src/store/selection'
import { IClip } from 'src/types/clip.interface'

import Keyframe from '../Keyframe/Keyframe'

interface IClipProps {
  clip: IClip
  path: number[]
  select: (selection: ISelection) => void
  selection: ISelection
  zoom: number
}

const Clip = ({ clip, path, select, selection, zoom }: IClipProps) => {
  const clipIndex = path[path.length - 1]

  const onKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    index: number
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      event.stopPropagation()
      select({ type: 'clip', path: [index] })
    }
  }

  return (
    <div
      className={`absolute -ml-3 mt-2 flex cursor-pointer flex-row rounded-2xl bg-slate-700 p-2 pl-3 transition-all hover:bg-slate-600
      ${
        isSelected(selection, { path, type: 'clip' })
          ? 'border border-slate-500'
          : ''
      }`}
      style={{
        left: `${clip.start * zoom}px`,
      }}
      onClick={() => select({ type: 'clip', path })}
      onKeyDown={(e) => onKeyDown(e, clipIndex)}
      role="option"
      aria-selected={isSelected(selection, {
        path: [...path, clipIndex],
        type: 'clip',
      })}
      aria-label={`Select clip from list`}
      tabIndex={0}
    >
      {clip.keyframes.map((keyframe, index) => (
        <Keyframe
          keyframe={keyframe}
          key={index}
          path={[...path, index]}
          select={select}
          selection={selection}
          zoom={zoom}
        />
      ))}
    </div>
  )
}

export default Clip
