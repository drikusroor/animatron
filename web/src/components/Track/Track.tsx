import { ISelection } from 'src/store/selection'
import { ITrack } from 'src/types/track.interface'

import Clip from '../Clip/Clip'

interface ITrackProps {
  track: ITrack
  height?: number
  path: number[]
  select: (selection: ISelection) => void
  selection: ISelection
}

const Track = ({ track, height, path, select, selection }: ITrackProps) => {
  const backgroundColorStyle = track.color
    ? { backgroundColor: track.color }
    : {}
  const heightStyle = height ? { height: `${height}px` } : {}

  return (
    <div
      style={{ ...backgroundColorStyle, ...heightStyle }}
      className="w-full bg-slate-800 pl-3"
    >
      <div className="flex items-center border-l border-slate-400 py-3">
        {track.clips.map((clip, index) => (
          <Clip
            key={index}
            clip={clip}
            path={[...path, index]}
            select={select}
            selection={selection}
          />
        ))}
      </div>
    </div>
  )
}

export default Track
