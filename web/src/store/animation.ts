import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { IAnimation } from 'src/types/animation.interface'

interface IAnimationState {
  animation: IAnimation | null
}

const useAnimationStore = create<IAnimationState>()(
  devtools((set) => ({
    animation: null,
  }))
)

export default useAnimationStore
