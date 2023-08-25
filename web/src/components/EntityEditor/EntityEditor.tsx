import { useState } from 'react'

import { FaTimes } from 'react-icons/fa'

import { IEntity } from 'src/types/entity.interface'

import EntityRenderer from '../EntityRenderer/EntityRenderer'

interface IEntityEditorProps {
  entity: IEntity
  updateEntity: (entity: IEntity) => void
  deselectEntity: () => void
}

const EntityEditor = ({
  deselectEntity,
  entity,
  updateEntity,
}: IEntityEditorProps) => {
  const [fade, setFade] = useState(false)

  const fadeAndDeselect = () => {
    setFade(true)
    setTimeout(() => {
      deselectEntity()
    }, 300)
  }

  const updateEntityProperty =
    (property: string) => (e: { target: { value: unknown } }) => {
      const value = e.target.value
      updateEntity({ ...entity, [property]: value })
    }

  return (
    <div
      className={`h-full overflow-y-auto p-4 transition-opacity duration-300 ease-in-out ${
        fade ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-2xl">
          Edit entity <span className="font-bold">{entity.name}</span>
        </h1>
        <button
          data-testid="entity-editor-close-button"
          className="flex items-center justify-center rounded-lg bg-red-500 p-2 transition-colors duration-300 ease-in-out hover:bg-red-600"
          onClick={fadeAndDeselect}
        >
          <FaTimes />
        </button>
      </div>

      <form className="mt-4 grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label htmlFor="html">HTML</label>
          <textarea
            className="mt-1 bg-gray-700"
            id="html"
            name="html"
            rows={10}
            cols={50}
            value={entity.html}
            onChange={updateEntityProperty('html')}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="css">CSS</label>
          <textarea
            className="mt-1 bg-gray-700"
            id="css"
            name="css"
            rows={10}
            cols={50}
            value={entity.css}
            onChange={updateEntityProperty('css')}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="mt-1 bg-gray-700"
            id="name"
            name="name"
            value={entity.name}
            onChange={updateEntityProperty('name')}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="image">Image</label>
          <input
            className="mt-1 bg-gray-700"
            id="image"
            name="image"
            type="text"
            value={entity.image}
            onChange={updateEntityProperty('image')}
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
