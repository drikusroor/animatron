import { useEffect } from 'react'

import { useBoundStore } from 'src/store'
import { IEntity } from 'src/types/entity.interface'
import { ITrack } from 'src/types/track.interface'

import EntityEditorContainer from '../EntityEditorContainer/EntityEditorContainer'
import EntityListContainer from '../EntityListContainer/EntityListContainer'
import KeyframeEditorContainer from '../KeyframeEditorContainer/KeyframeEditorContainer'
import TrackManager from '../TrackManager/TrackManager'

interface AnimationEditorProps {
  entities: IEntity[]
  tracks: ITrack[]
}

const AnimationEditor = (props: AnimationEditorProps) => {
  const selection = useBoundStore((state) => state.selection)
  const select = useBoundStore((state) => state.select)

  const { tracks } = props

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
        <div>
          <h2 className="text-sm font-bold uppercase">Entities</h2>
          <EntityListContainer />
        </div>
        <div>
          <button className="w-full rounded-lg bg-amber-400 px-4 py-2 font-bold uppercase text-gray-800 transition-colors duration-200 ease-in-out hover:bg-amber-500">
            Save changes
          </button>
        </div>
      </div>
      <div className="flex h-screen w-full flex-col justify-end border-e">
        <EntityEditorContainer />
        <KeyframeEditorContainer />
        <TrackManager tracks={tracks} />
      </div>
    </div>
  )
}

export default AnimationEditor
