import { useBoundStore } from 'src/store'

import ClipEditor from '../ClipEditor/ClipEditor'

const ClipEditorContainer = () => {
  const currentSelection = useBoundStore((state) => state.selection)
  const getSelectedClip = useBoundStore((state) => state.getSelectedClip)

  const select = useBoundStore((state) => state.select)
  const deselectClip = () => select(null)

  const updateClip = useBoundStore((state) => state.updateClip)

  if (currentSelection?.type !== 'clip') return null

  const { track, clip } = getSelectedClip() || {}

  if (!clip) return null

  return (
    <ClipEditor
      clip={clip}
      deselectClip={deselectClip}
      updateClip={(clip) => updateClip(track, clip)}
    />
  )
}

export default ClipEditorContainer
