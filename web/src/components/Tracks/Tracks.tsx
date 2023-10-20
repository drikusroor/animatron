import { useEffect, useRef, useState } from 'react'

import { FaSearchMinus, FaSearchPlus } from 'react-icons/fa'

import Track from 'src/components/Track/Track'
import { useBoundStore } from 'src/store'

interface ITracksProps {
  trackHeight?: number
  scrollRef: React.RefObject<HTMLDivElement>
  handleScroll: (e: Event) => void
}

const Tracks = ({ handleScroll, scrollRef, trackHeight }: ITracksProps) => {
  const tracks = useBoundStore((state) => state.tracks)
  const select = useBoundStore((state) => state.select)
  const selection = useBoundStore((state) => state.selection)
  const zoom = useBoundStore((state) => state.zoom)
  const setZoom = useBoundStore((state) => state.setZoom)

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
    <div className="group relative w-full">
      <div className="overflow-x-auto bg-gray-800" ref={scrollRef}>
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
      <div className="absolute right-2 top-2 z-10 flex flex-row items-center justify-center gap-1">
        <button
          className="rounded-full p-2 opacity-10 transition hover:bg-gray-600 hover:text-gray-100 hover:shadow-lg group-hover:opacity-100"
          title="Zoom in"
          aria-label="Zoom in"
          onClick={() => setZoom(zoom * 2)}
        >
          <FaSearchPlus />
        </button>

        <button
          className="rounded-full p-2 opacity-10 transition hover:bg-gray-600 hover:text-gray-100 hover:shadow-lg group-hover:opacity-100"
          title="Zoom out"
          aria-label="Zoom out"
          onClick={() => setZoom(zoom / 2)}
        >
          <FaSearchMinus />
        </button>
      </div>
    </div>
  )
}

export default Tracks
