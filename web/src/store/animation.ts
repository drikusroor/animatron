import { StateCreator } from 'zustand'

import { IAnimation, IAnimationAggregated } from 'src/types/animation.interface'

import { IRootState } from '.'

export interface IAnimationState {
  animation: IAnimation
  setAnimation: (animation: IAnimation) => void
  getAggregatedAnimation: () => IAnimationAggregated
}

const createAnimationSlice: StateCreator<
  IRootState,
  [],
  [],
  IAnimationState
> = (set, get) => ({
  animation: null,
  setAnimation: (animation: IAnimation) =>
    set(() => ({
      animation,
    })),
  getAggregatedAnimation: () => {
    const { animation, entities, tracks } = get()
    return {
      ...animation,
      entities,
      tracks,
    }
  },
})

export default createAnimationSlice
