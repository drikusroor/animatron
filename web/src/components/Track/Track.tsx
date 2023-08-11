import { ITrack } from 'src/types/track.interface'

import Clip from '../Clip/Clip'

interface ITrackProps {
  track: ITrack
}

const Track = ({ track }: ITrackProps) => {
  const bgColor = track.color ? { backgroundColor: track.color } : {}

  return (
    <div
      style={{ ...bgColor }}
      className="m-2 flex items-center bg-slate-700 py-3"
    >
      {track.clips.map((clip, index) => (
        <div key={index} className="">
          <Clip clip={clip} />
        </div>
      ))}
    </div>
  )
}

export default Track
