import { IClip } from 'src/types/clip.interface'
import { IKeyframe } from 'src/types/keyframe.interface'
import { ITrack } from 'src/types/track.interface'

export const keyframe: IKeyframe = {
  id: 1,
  duration: 20,
}

export function createKeyframe(overrides?: Partial<IKeyframe>): IKeyframe {
  return {
    ...keyframe,
    ...overrides,
  }
}

export const clip: IClip = {
  id: 1,
  start: 0,
  keyframes: [createKeyframe(), createKeyframe()],
}

export function createClip(overrides?: Partial<IClip>): IClip {
  return {
    ...clip,
    ...overrides,
  }
}

export const track: ITrack = {
  id: 1,
  name: 'Track 1',
  clips: [createClip(), createClip()],
}

export function createTrack(overrides?: Partial<ITrack>): ITrack {
  return {
    ...track,
    ...overrides,
  }
}
