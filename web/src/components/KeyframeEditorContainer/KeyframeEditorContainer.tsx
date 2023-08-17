import { useBoundStore } from 'src/store'
import { ISelection } from 'src/store/selection'
import { ITrack } from 'src/types/track.interface'

import KeyframeEditor from '../KeyframeEditor/KeyframeEditor'

const findKeyframe = (tracks: ITrack[], currentSelection: ISelection) => {
  const { path } = currentSelection

  const [trackIndex, clipIndex, keyframeIndex] = path

  const track = tracks[trackIndex]
  const clip = track.clips[clipIndex]
  const keyframe = clip.keyframes[keyframeIndex]

  return {
    track,
    clip,
    keyframe,
  }
}

const KeyframeEditorContainer = () => {
  const currentSelection = useBoundStore((state) => state.selection)
  const updateKeyframe = useBoundStore((state) => state.updateKeyframe)

  const select = useBoundStore((state) => state.select)
  const deselectKeyframe = () => select(null)
  const tracks = useBoundStore((state) => state.tracks)

  if (currentSelection?.type !== 'keyframe') return null

  const { keyframe } = findKeyframe(tracks, currentSelection)

  return (
    <KeyframeEditor
      keyframe={keyframe}
      deselectKeyframe={deselectKeyframe}
      updateKeyframe={updateKeyframe}
    />
  )
}

export default KeyframeEditorContainer
