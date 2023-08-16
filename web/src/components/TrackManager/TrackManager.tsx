import { useEffect, useRef, useState } from 'react'

import useSelectionStore from 'src/store/selection'
import { ITrack } from 'src/types/track.interface'

import Track from '../Track/Track'
import TrackDetails from '../TrackDetails/TrackDetails'

interface ITrackManagerProps {
  tracks: ITrack[]
  trackHeight?: number
}

const TrackManager = ({ tracks, trackHeight = 32 }: ITrackManagerProps) => {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const [showShadow, setShowShadow] = useState(false)

  const select = useSelectionStore((state) => state.select)
  const selection = useSelectionStore((state) => state.selection)

  const handleScroll = (e: Event) => {
    const scrollPosition = (e.currentTarget as HTMLDivElement).scrollLeft
    setShowShadow(scrollPosition > 0)
  }

  useEffect(() => {
    const div = scrollRef.current
    if (div) {
      div.addEventListener('scroll', handleScroll)
      return () => {
        div.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return (
    <div className="flex flex-row">
      <div className="relative">
        <div
          className={`absolute -right-4 top-0 z-10 h-full w-4 bg-gradient-to-r from-slate-900 transition-opacity
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
      <div className="w-full overflow-x-auto" ref={scrollRef}>
        {tracks.map((track, index) => (
          <Track
            key={index}
            track={track}
            height={trackHeight}
            path={[index]}
            select={select}
            selection={selection}
          />
        ))}
      </div>
    </div>
  )
}

export default TrackManager
