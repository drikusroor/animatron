import { ISelection } from 'src/store/selection'
import { ITrack } from 'src/types/track.interface'

import Clip from '../Clip/Clip'

interface ITrackProps {
  track: ITrack
  height?: number
  path: number[]
  select: (selection: ISelection) => void
  selection: ISelection
  zoom: number
}

const Track = ({
  track,
  height,
  path,
  select,
  selection,
  zoom,
}: ITrackProps) => {
  const backgroundColorStyle = track.color
    ? { backgroundColor: track.color }
    : {}
  const heightStyle = height ? { height: `${height}px` } : {}

  return (
    <div
      style={{ ...backgroundColorStyle, ...heightStyle }}
      className="w-full pl-3"
    >
      <div className="relative flex items-center border-l border-slate-400 py-3">
        {track.clips.map((clip, index) => (
          <Clip
            key={index}
            clip={clip}
            path={[...path, index]}
            select={select}
            selection={selection}
            zoom={zoom}
          />
        ))}
      </div>
    </div>
  )
}

export default Track
