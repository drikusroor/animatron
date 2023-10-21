import { useRef, useState } from 'react'

import classNames from 'src/helpers/classNames'
import { useBoundStore } from 'src/store'
import { ISelection } from 'src/store/selection'
import { IClipInput } from 'src/types/clip.interface'
import { IEntity } from 'src/types/entity.interface'
import { IKeyframeInput } from 'src/types/keyframe.interface'
import { ITrack, ITrackInput } from 'src/types/track.interface'

import Clip from '../Clip/Clip'
import NewClipGhost from '../NewClipGhost/NewClipGhost'

interface ITrackProps {
  track: ITrack
  height?: number
  path: number[]
  select: (selection: ISelection) => void
  selection: ISelection
  zoom: number
}

const Track = ({
  track,
  height,
  path,
  select,
  selection,
  zoom,
}: ITrackProps) => {
  const backgroundColorStyle = track.color
    ? { backgroundColor: track.color }
    : {}
  const heightStyle = height ? { height: `${height}px` } : {}
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const trackDivRef = useRef<HTMLDivElement | null>(null)
  const addClip = useBoundStore((state) => state.addClip)
  const getSelected = useBoundStore((state) => state.getSelectedItem)

  const eligibleForAddingClip = selection?.type === 'entity'

  const handleTrackMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (trackDivRef.current) {
      const rect = trackDivRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left // get the x position inside the div
      setCursorPosition({ x, y: e.clientY })
    }
  }

  const handleTrackClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (trackDivRef.current) {
      const rect = trackDivRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left // get the x position inside the div

      const newKeyframeInput: IKeyframeInput = {
        sort: 0,
        duration: 64,
        css: '',
      }

      const animationEntityUuid = (getSelected() as { entity: IEntity }).entity
        .uuid
      console.log({ animationEntityUuid })

      const newClipInput: IClipInput = {
        start: x,
        keyframes: [newKeyframeInput],
        animationEntityUuid,
      }

      addClip(track, newClipInput)
    }
  }

  return (
    <div
      style={{ ...backgroundColorStyle, ...heightStyle }}
      className="w-full pl-3"
    >
      <div
        className={classNames(
          'relative flex items-center border-l border-gray-400 py-3',
          !eligibleForAddingClip ? 'cursor-not-allowed' : 'cursor-cell'
        )}
        ref={trackDivRef}
        onMouseMove={handleTrackMouseMove}
        onClick={eligibleForAddingClip ? handleTrackClick : () => void 0}
      >
        {track.clips.map((clip, index) => (
          <Clip
            key={index}
            clip={clip}
            path={[...path, index]}
            select={select}
            selection={selection}
            zoom={zoom}
          />
        ))}
        <div
          className={classNames(
            'pointer-events-none absolute h-full opacity-0 transition duration-200 group-hover:opacity-100'
          )}
          style={{ left: cursorPosition.x }}
        >
          {eligibleForAddingClip ? (
            <NewClipGhost />
          ) : (
            <span className="text-xs text-gray-300">
              Please select a clip before adding a clip
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default Track
