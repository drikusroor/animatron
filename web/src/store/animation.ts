import { StateCreator } from 'zustand'

import { IAnimation } from 'src/types/animation.interface'

import { IRootState } from '.'

export interface IAnimationState {
  animation: IAnimation
  setAnimation: (animation: IAnimation) => void
}

const createAnimationSlice: StateCreator<
  IRootState,
  [],
  [],
  IAnimationState
> = (set) => ({
  animation: null,
  setAnimation: (animation: IAnimation) =>
    set(() => ({
      animation,
    })),
})

export default createAnimationSlice
