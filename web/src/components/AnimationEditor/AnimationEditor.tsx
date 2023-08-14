import { IEntity } from 'src/types/entity.interface'
import { ITrack } from 'src/types/track.interface'

import TrackManager from '../TrackManager/TrackManager'

interface AnimationEditorProps {
  entities: IEntity[]
  tracks: ITrack[]
}

const AnimationEditor = (props: AnimationEditorProps) => {
  const { entities, tracks } = props

  return (
    <div className="flex h-screen flex-row">
      <div className="flex h-screen w-64 flex-col border-e p-2">
        <h2 className="text-sm font-bold uppercase">Entities</h2>
        <ul className="mt-3">
          {entities.map((entity: IEntity, index) => {
            return (
              <li
                className="cursor-pointer rounded-lg px-2 py-2 transition-colors hover:bg-gray-700"
                key={index}
              >
                {entity.name}
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
