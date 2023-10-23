import { useState } from 'react'

import { FaTimes } from 'react-icons/fa'

import { IClip } from 'src/types/clip.interface'
import { ITrack } from 'src/types/track.interface'

interface ClipEditorProps {
  clip: IClip
  deselectClip: () => void
  updateClip: (clip: IClip) => void
}

const ClipEditor = ({ clip, deselectClip, updateClip }: ClipEditorProps) => {
  const [fade, setFade] = useState(false)

  const fadeAndDeselect = () => {
    setFade(true)
    setTimeout(() => {
      deselectClip()
    }, 300)
  }

  return (
    <div
      className={`h-full p-4 transition-opacity duration-300 ease-in-out ${
        fade ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Clip Editor</h1>
        <button
          data-testid="entity-editor-close-button"
          className="flex items-center justify-center rounded-lg bg-red-500 p-2 transition-colors duration-300 ease-in-out hover:bg-red-600"
          onClick={fadeAndDeselect}
        >
          <FaTimes />
        </button>
      </div>
      <form className="mt-4 flex flex-row gap-4">
        <div className="flex flex-col">
          <label htmlFor="css">Start</label>
          <input
            type="number"
            className="mt-1 bg-gray-700 p-2"
            id="start"
            name="start"
            value={clip.start}
            onChange={(e) =>
              updateClip({
                ...clip,
                start: parseInt(e.target.value),
              })
            }
          />
        </div>
      </form>
    </div>
  )
}

export default ClipEditor
