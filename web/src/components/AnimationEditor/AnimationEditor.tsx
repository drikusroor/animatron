import { useEffect } from 'react'

import { FaSave } from 'react-icons/fa'

import { RWGqlError } from '@redwoodjs/forms'

import { useBoundStore } from 'src/store'
import { IEntity } from 'src/types/entity.interface'
import { ITrack } from 'src/types/track.interface'

import AddNewEntityContainer from '../AddNewEntityContainer/AddNewEntityContainer'
import EntityEditorContainer from '../EntityEditorContainer/EntityEditorContainer'
import EntityListContainer from '../EntityListContainer/EntityListContainer'
import KeyframeEditorContainer from '../KeyframeEditorContainer/KeyframeEditorContainer'
import TrackManager from '../TrackManager/TrackManager'

interface AnimationEditorProps {
  entities: IEntity[]
  tracks: ITrack[]
  onSave: () => void
  error: RWGqlError
  loading: boolean
}

const AnimationEditor = ({ onSave }: AnimationEditorProps) => {
  const selection = useBoundStore((state) => state.selection)
  const select = useBoundStore((state) => state.select)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selection) {
        select(null)

        const activeElement = document.activeElement as HTMLElement
        activeElement.blur()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selection, select])

  return (
    <div className="flex h-screen flex-row">
      <div className="flex h-screen w-64 flex-col justify-between border-e p-2">
        <div className="flex flex-col gap-2">
          <h2 className="text-sm font-bold uppercase">Entities</h2>
          <EntityListContainer />
          <AddNewEntityContainer />
        </div>
        <div>
          <button
            className="flex w-full flex-row items-center gap-2 rounded-lg bg-amber-400 px-4 py-2 font-bold uppercase text-gray-800 transition-colors duration-200 ease-in-out hover:bg-amber-500"
            onClick={onSave}
          >
            <FaSave />
            Save changes
          </button>
        </div>
      </div>
      <div className="flex h-screen w-full flex-col justify-end border-e">
        <EntityEditorContainer />
        <KeyframeEditorContainer />
        <TrackManager />
      </div>
    </div>
  )
}

export default AnimationEditor
