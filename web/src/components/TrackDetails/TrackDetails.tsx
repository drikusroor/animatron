import { ISelection, isSelected } from 'src/store/selection'
import { ITrack } from 'src/types/track.interface'

import DeleteTrackButton from '../DeleteTrackButton/DeleteTrackButton'

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
      className={`group relative flex w-32 flex-row items-center overflow-hidden border-r border-gray-600 px-2 text-gray-100 transition-colors hover:bg-gray-600
      ${
        isSelected(selection, { path, type: 'track' })
          ? 'border-l-4 border-gray-100 font-bold'
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
      <div className="absolute right-0 flex -translate-y-full flex-row items-center gap-1 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
        <DeleteTrackButton track={track} />
      </div>
    </div>
  )
}

export default TrackDetails
