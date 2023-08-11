import { ITrack } from 'src/types/track.interface'

interface ITrackDetailsProps {
  track: ITrack
}

const TrackDetails = ({ track }: ITrackDetailsProps) => {
  return (
    <div className="flex w-32 flex-row items-center border-r border-slate-500 bg-slate-600 px-2 text-slate-100">
      <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
        {track.name}
      </p>
    </div>
  )
}

export default TrackDetails
