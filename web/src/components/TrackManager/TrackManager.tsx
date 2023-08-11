import { ITrack } from 'src/types/track.interface'

import Track from '../Track/Track'
import TrackDetails from '../TrackDetails/TrackDetails'

interface ITrackManagerProps {
  tracks: ITrack[]
  trackHeight?: number
}

const TrackManager = ({ tracks, trackHeight = 32 }: ITrackManagerProps) => {
  return (
    <div className="flex flex-row overflow-y-auto">
      <div>
        {tracks.map((track) => (
          <TrackDetails key={track.id} track={track} height={trackHeight} />
        ))}
      </div>
      <div className="overflow-x-auto">
        {tracks.map((track) => (
          <Track key={track.id} track={track} height={trackHeight} />
        ))}
      </div>
    </div>
  )
}

export default TrackManager
