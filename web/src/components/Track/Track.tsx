import { useRef, useState } from 'react'

import { FaExclamationTriangle } from 'react-icons/fa'

import classNames from 'src/helpers/classNames'
import { IRootState, useBoundStore } from 'src/store'
import { ISelectedEntity } from 'src/store/selection'
import { IClipInput } from 'src/types/clip.interface'
import { IKeyframeInput } from 'src/types/keyframe.interface'
import { ITrack } from 'src/types/track.interface'

import Clip from '../Clip/Clip'
import NewClipGhost from '../NewClipGhost/NewClipGhost'

interface ITrackProps {
  track: ITrack
  height?: number
  path: number[]
  select: IRootState['select']
  selection: IRootState['selection']
  zoom: number
  addClip: IRootState['addClip']
  getSelectedItem: IRootState['getSelectedItem']
}

const PureTrack = ({
  track,
  height,
  path,
  select,
  selection,
  zoom,
  addClip,
  getSelectedItem,
}: ITrackProps) => {
  const backgroundColorStyle = track.color
    ? { backgroundColor: track.color }
    : {}
  const heightStyle = height ? { height: `${height}px` } : {}
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const trackDivRef = useRef<HTMLDivElement | null>(null)

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

      const animationEntityUuid = (getSelectedItem() as ISelectedEntity).entity
        .uuid

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
            <span className="flex flex-row items-center gap-1 rounded bg-gray-900 p-1 text-xs text-gray-300">
              <FaExclamationTriangle />
              Please select an entity
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export const Track = (props) => {
  const addClip = useBoundStore((state) => state.addClip)
  const getSelectedItem = useBoundStore((state) => state.getSelectedItem)

  return (
    <PureTrack addClip={addClip} getSelectedItem={getSelectedItem} {...props} />
  )
}

export default Track
