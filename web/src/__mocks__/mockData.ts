import { IAnimation } from 'src/types/animation.interface'
import { IClip } from 'src/types/clip.interface'
import { IEntity } from 'src/types/entity.interface'
import { IKeyframe } from 'src/types/keyframe.interface'
import { ITrack } from 'src/types/track.interface'

export const keyframe: IKeyframe = {
  id: 1,
  duration: 20,
  sort: 0,
  css: '{ color: red; }',
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
  sortNumber: 0,
  createdAt: '2020-01-01T00:00:00.000Z',
  updatedAt: '2020-01-01T00:00:00.000Z',
  clips: [createClip(), createClip()],
}

export function createTrack(overrides?: Partial<ITrack>): ITrack {
  return {
    ...track,
    ...overrides,
  }
}

export const entity: IEntity = {
  id: 1,
  name: 'Entity 1',
  description: 'Entity 1 description',
  revisionId: 1,
  createdAt: '2020-01-01T00:00:00.000Z',
  updatedAt: '2020-01-01T00:00:00.000Z',
  image: 'https://placekitten.com/200/300',
  html: '<div>Entity 1</div>',
  css: '{ color: red; }',
}

export function createEntity(overrides?: Partial<IEntity>): IEntity {
  return {
    ...entity,
    ...overrides,
  }
}

export const animation: IAnimation = {
  id: 1,
  name: 'Animation 1',
  description: 'Animation 1 description',
  animationHistoryId: 'a98c89a0-9b1a-11eb-a8b3-0242ac130003',
  version: 1,
  createdAt: '2020-01-01T00:00:00.000Z',
  updatedAt: '2020-01-01T00:00:00.000Z',
}

export function createAnimation(overrides?: Partial<IAnimation>): IAnimation {
  return {
    ...animation,
    ...overrides,
  }
}
