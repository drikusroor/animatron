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
  isSelected(path: number[], type: TSelectionType): boolean
}

const useSelectionStore = create<ISelectionState>()(
  devtools(
    (set) => ({
      selection: null,
      select: (selection: ISelection) => set({ selection }),
      isSelected: (path: number[], type: TSelectionType) =>
        !!(
          useSelectionStore.getState().selection &&
          useSelectionStore.getState().selection.type === type &&
          useSelectionStore.getState().selection.path.join('-') ===
            path.join('-')
        ),
    }),
    {
      name: 'selection-storage',
    }
  )
)

export default useSelectionStore
