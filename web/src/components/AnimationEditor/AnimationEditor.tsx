import { IAnimation } from 'src/types/animation.interface'
import { IEntity } from 'src/types/entity.interface'
import { ITrack } from 'src/types/track.interface'

import TrackManager from '../TrackManager/TrackManager'

interface AnimationEditorProps {
  animation: IAnimation
  entities: IEntity[]
  tracks: ITrack[]
}

const AnimationEditor = (props: AnimationEditorProps) => {
  return (
    <div>
      <TrackManager tracks={props.tracks} />
    </div>
  )
}

export default AnimationEditor
