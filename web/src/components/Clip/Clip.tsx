import { IClip } from 'src/types/clip.interface'

import Keyframe from '../Keyframe/Keyframe'

interface IClipProps {
  clip: IClip
}

const Clip = ({ clip }: IClipProps) => {
  return (
    <div className="flex flex-row">
      {clip.keyframes.map((keyframe, index) => (
        <Keyframe keyframe={keyframe} key={index} />
      ))}
    </div>
  )
}

export default Clip
