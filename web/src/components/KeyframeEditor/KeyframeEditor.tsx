import { useState } from 'react'

import { FaTimes } from 'react-icons/fa'

import { IKeyframe } from 'src/types/keyframe.interface'

interface IKeyframeEditorProps {
  keyframe: IKeyframe
  deselectKeyframe: () => void
  updateKeyframe: (keyframe: IKeyframe) => void
}

const KeyframeEditor = ({
  keyframe,
  deselectKeyframe,
  updateKeyframe,
}: IKeyframeEditorProps) => {
  const [fade, setFade] = useState(false)

  const fadeAndDeselect = () => {
    setFade(true)
    setTimeout(() => {
      deselectKeyframe()
    }, 300)
  }

  return (
    <div
      className={`h-full p-4 transition-opacity duration-300 ease-in-out ${
        fade ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Keyframe Editor</h1>
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
          <label htmlFor="css">CSS</label>
          <textarea
            className="mt-1 bg-slate-700"
            id="css"
            name="css"
            rows={10}
            cols={50}
            value={keyframe.css}
            onChange={(e) =>
              updateKeyframe({ ...keyframe, css: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="css">Duration</label>
          <input
            type="number"
            className="mt-1 bg-slate-700 p-2"
            id="duration"
            name="duration"
            value={keyframe.duration}
            onChange={(e) =>
              updateKeyframe({
                ...keyframe,
                duration: parseInt(e.target.value),
              })
            }
          />
        </div>
      </form>
    </div>
  )
}

export default KeyframeEditor
