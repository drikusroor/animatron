import { ITrack } from 'src/types/track.interface'

import Clip from '../Clip/Clip'

interface ITrackProps {
  track: ITrack
  height?: number
}

const Track = ({ track, height }: ITrackProps) => {
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
          <Clip key={index} clip={clip} />
        ))}
      </div>
    </div>
  )
}

export default Track
