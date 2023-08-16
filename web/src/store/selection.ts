import { useMemo } from 'react'

import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type TSelectionType = 'entity' | 'track' | 'clip' | 'keyframe'

export interface ISelection {
  path: number[]
  type: TSelectionType
}

interface ISelectionState {
  selection: ISelection | null
  select: (newSelection: ISelection | null) => void
}

const useSelectionStore = create<ISelectionState>()(
  devtools(
    (set) => ({
      selection: null,
      select: (selection: ISelection) => set({ selection }),
    }),
    {
      name: 'selection-storage',
    }
  )
)

export const isSelected = (
  selection: ISelection | null,
  { path, type }: ISelection
) => {
  return !!(
    selection &&
    selection.type === type &&
    selection.path.join('-') === path.join('-')
  )
}

export default useSelectionStore
