import { useEffect } from 'react'

import useSelectionStore from 'src/store/selection'
import { IEntity } from 'src/types/entity.interface'
import { ITrack } from 'src/types/track.interface'

import EntityEditorContainer from '../EntityEditorContainer/EntityEditorContainer'
import EntityListContainer from '../EntityListContainer/EntityListContainer'
import TrackManager from '../TrackManager/TrackManager'

interface AnimationEditorProps {
  entities: IEntity[]
  tracks: ITrack[]
}

const AnimationEditor = (props: AnimationEditorProps) => {
  const selection = useSelectionStore((state) => state.selection)
  const select = useSelectionStore((state) => state.select)

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
      <div className="flex h-screen w-64 flex-col border-e p-2">
        <h2 className="text-sm font-bold uppercase">Entities</h2>
        <EntityListContainer />
      </div>
      <div className="flex h-screen w-full flex-col justify-end border-e">
        <EntityEditorContainer />
        <TrackManager tracks={tracks} />
      </div>
    </div>
  )
}

export default AnimationEditor
