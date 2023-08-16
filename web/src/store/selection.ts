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

export default useSelectionStore
