import { ISelection, isSelected } from 'src/store/selection'
import { ITrack } from 'src/types/track.interface'

interface ITrackDetailsProps {
  track: ITrack
  height: number
  path: number[]
  select: (selection: ISelection) => void
  selection: ISelection
}

const TrackDetails = ({
  height,
  path,
  select,
  selection,
  track,
}: ITrackDetailsProps) => {
  return (
    <div
      className={`flex w-32 flex-row items-center border-r border-slate-600 px-2 text-slate-100 transition-colors hover:bg-slate-600
      ${
        isSelected(selection, { path, type: 'track' })
          ? 'border-l-4 border-slate-100 font-bold'
          : ''
      }`}
      style={{ height }}
      onClick={() => select({ path, type: 'track' })}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          select({ path, type: 'track' })
        }
      }}
      role="button"
      tabIndex={0}
    >
      <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
        {track.name}
      </p>
    </div>
  )
}

export default TrackDetails
