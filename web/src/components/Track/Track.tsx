import { ITrack } from 'src/types/track.interface'

import Clip from '../Clip/Clip'
import TrackDetails from '../TrackDetails/TrackDetails'

interface ITrackProps {
  track: ITrack
}

const Track = ({ track }: ITrackProps) => {
  const backgroundColor = track.color ? { backgroundColor: track.color } : {}
  const height = track.height ? { height: track.height } : {}

  return (
    <div
      style={{ ...backgroundColor, ...height }}
      className="flex bg-slate-700"
    >
      <TrackDetails track={track} />
      <div className="w-4"></div>
      <div className="flex items-center border-l border-slate-400 py-3">
        {track.clips.map((clip, index) => (
          <Clip key={index} clip={clip} />
        ))}
      </div>
    </div>
  )
}

export default Track
