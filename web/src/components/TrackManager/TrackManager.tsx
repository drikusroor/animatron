import { useEffect, useRef, useState } from 'react'

import { FaSearchMinus, FaSearchPlus } from 'react-icons/fa'

import { useBoundStore } from 'src/store'
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

  const select = useBoundStore((state) => state.select)
  const selection = useBoundStore((state) => state.selection)
  const zoom = useBoundStore((state) => state.zoom)
  const setZoom = useBoundStore((state) => state.setZoom)

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
      <div className="relative bg-slate-700">
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
      <div className="relative w-full">
        <div className="overflow-x-auto bg-slate-800" ref={scrollRef}>
          {tracks.map((track, index) => (
            <Track
              key={index}
              track={track}
              height={trackHeight}
              path={[index]}
              select={select}
              selection={selection}
              zoom={zoom}
            />
          ))}
        </div>
        <div className="absolute right-5 top-0 z-10 flex h-full w-8 flex-row items-center justify-center gap-1">
          <button
            className="rounded-full p-2 transition-colors hover:bg-slate-600"
            title="Zoom in"
            aria-label="Zoom in"
            onClick={() => setZoom(zoom * 2)}
          >
            <FaSearchPlus />
          </button>

          <button
            className="rounded-full p-2 transition-colors hover:bg-slate-600"
            title="Zoom out"
            aria-label="Zoom out"
            onClick={() => setZoom(zoom / 2)}
          >
            <FaSearchMinus />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TrackManager
