import useSelectionStore from 'src/store/selection'
import { IEntity } from 'src/types/entity.interface'
import { ITrack } from 'src/types/track.interface'

import TrackManager from '../TrackManager/TrackManager'

interface AnimationEditorProps {
  entities: IEntity[]
  tracks: ITrack[]
}

const AnimationEditor = (props: AnimationEditorProps) => {
  const { entities, tracks } = props

  const select = useSelectionStore((state) => state.select)
  const selected = useSelectionStore((state) => state.selection)

  const isSelected = (id: number) => {
    return selected?.id === id && selected.type === 'entity'
  }

  return (
    <div className="flex h-screen flex-row">
      <div className="flex h-screen w-64 flex-col border-e p-2">
        <h2 className="text-sm font-bold uppercase">Entities</h2>
        <ul className="mt-3">
          {entities.map((entity: IEntity, index) => {
            return (
              <li key={index}>
                <button
                  className={`mt-2 block w-full cursor-pointer rounded-lg px-2 py-2 text-left transition-colors hover:bg-gray-700
                ${isSelected(entity.id) ? 'bg-gray-700 font-bold' : ''}`}
                  onClick={() => select({ type: 'entity', id: entity.id })}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      select({ type: 'entity', id: entity.id })
                    }
                  }}
                >
                  {entity.name}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="flex h-screen w-full flex-col justify-end border-e">
        <TrackManager tracks={tracks} />
      </div>
    </div>
  )
}

export default AnimationEditor
