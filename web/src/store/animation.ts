import { StateCreator } from 'zustand'

import {
  IAnimation,
  IAnimationAggregated,
  IAnimationInput,
  mapAnimationAggregatedToAnimationInput,
  mapAnimationToAnimationAggregated,
} from 'src/types/animation.interface'

import { IRootState } from '.'

export interface IAnimationState {
  animation: IAnimation
  setAnimation: (animation: IAnimation) => void
  getAggregatedAnimation: () => IAnimationInput
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

    const aggregatedAnimation: IAnimationAggregated =
      mapAnimationToAnimationAggregated(animation, entities, tracks)

    const animationInput =
      mapAnimationAggregatedToAnimationInput(aggregatedAnimation)

    return animationInput
  },
})

export default createAnimationSlice
