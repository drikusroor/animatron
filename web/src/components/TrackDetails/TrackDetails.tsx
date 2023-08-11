import { ITrack } from 'src/types/track.interface'

interface ITrackDetailsProps {
  track: ITrack
  height: number
}

const TrackDetails = ({ track, height }: ITrackDetailsProps) => {
  return (
    <div
      className="flex w-32 flex-row items-center border-r border-slate-500 bg-slate-600 px-2 text-slate-100"
      style={{ height }}
    >
      <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
        {track.name}
      </p>
    </div>
  )
}

export default TrackDetails
