import { useState } from 'react'

import { FaTimes } from 'react-icons/fa'

import { IEntity } from 'src/types/entity.interface'

import EntityRenderer from '../EntityRenderer/EntityRenderer'

interface IEntityEditorProps {
  entity: IEntity
  deselectEntity: () => void
}

const EntityEditor = ({ entity, deselectEntity }: IEntityEditorProps) => {
  const [fade, setFade] = useState(false)

  const fadeAndDeselect = () => {
    setFade(true)
    setTimeout(() => {
      deselectEntity()
    }, 300)
  }

  return (
    <div
      className={`h-full p-4 transition-opacity duration-300 ease-in-out ${
        fade ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Entity Editor</h1>
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
          <label htmlFor="html">HTML</label>
          <textarea
            className="mt-1 bg-slate-700"
            id="html"
            name="html"
            rows={10}
            cols={50}
            defaultValue={entity.html}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="css">CSS</label>
          <textarea
            className="mt-1 bg-slate-700"
            id="css"
            name="css"
            rows={10}
            cols={50}
            defaultValue={entity.css}
          />
        </div>
      </form>

      <div className="mt-4">
        <EntityRenderer entity={entity} />
      </div>
    </div>
  )
}

export default EntityEditor
