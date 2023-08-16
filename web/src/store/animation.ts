import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { IAnimation } from 'src/types/animation.interface'

interface IAnimationState {
  animation: IAnimation
  setAnimation: (animation: IAnimation) => void
}

const useAnimationStore = create<IAnimationState>()(
  devtools(
    (set) => ({
      animation: null,
      setAnimation: (animation: IAnimation) =>
        set(() => ({
          animation,
        })),
    }),

    {
      name: 'animation-storage',
    }
  )
)

export default useAnimationStore
