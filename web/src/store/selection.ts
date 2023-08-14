import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type TSelectionType = 'entity' | 'track' | 'clip' | 'keyframe'

interface ISelection {
  id: number
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
      select: (newSelection: ISelection) => set({ selection: newSelection }),
    }),
    {
      name: 'selection-storage',
    }
  )
)

export default useSelectionStore
