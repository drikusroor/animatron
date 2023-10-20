import { useRef, useState } from 'react'

import { useBoundStore } from 'src/store'

import AddNewTrackButton from '../AddNewTrackButton/AddNewTrackButton'
import TrackDetails from '../TrackDetails/TrackDetails'
import Tracks from '../Tracks/Tracks'

interface ITrackManagerProps {
  trackHeight?: number
}

const TrackManager = ({ trackHeight = 32 }: ITrackManagerProps) => {
  const tracks = useBoundStore((state) => state.tracks)
  const select = useBoundStore((state) => state.select)
  const selection = useBoundStore((state) => state.selection)
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const [showShadow, setShowShadow] = useState(false)

  const addNewTrack = useBoundStore((state) => state.addTrack)

  const handleClickAddNewTrack = () => {
    addNewTrack()
  }

  const handleScroll = (e: Event) => {
    const scrollPosition = (e.currentTarget as HTMLDivElement).scrollLeft
    setShowShadow(scrollPosition > 0)
  }

  return (
    <>
      <div className="flex flex-row">
        <div className="relative bg-gray-700">
          <div
            className={`absolute -right-4 top-0 z-10 h-full w-4 bg-gradient-to-r from-gray-900 transition-opacity
          ${showShadow ? 'opacity-25' : 'opacity-0'}`}
          />
          {tracks.map((track, index) => (
            <TrackDetails
              key={index}
              track={track}
              height={trackHeight}
              path={[index]}
              select={select}
              selection={selection}
            />
          ))}
        </div>
        <Tracks
          trackHeight={trackHeight}
          scrollRef={scrollRef}
          handleScroll={handleScroll}
        />
      </div>
      <div>
        <AddNewTrackButton onClick={handleClickAddNewTrack} />
      </div>
    </>
  )
}

export default TrackManager
