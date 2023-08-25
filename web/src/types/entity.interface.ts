export interface IEntityVisualData {
  image: string
  html: string
  css: string
}

export interface IEntityMetadata {
  __typename?: 'AnimationEntity'
  id?: number
  name: string
  description?: string
  revisionId?: number
  createdAt?: string
  updatedAt?: string
  uuid?: string
}

export interface IEntity extends IEntityMetadata, IEntityVisualData {}

export interface IEntityInput {
  name: string
  description?: string
  image: string
  html: string
  css: string
  uuid?: string
}

export const mapEntityToEntityInput = (entity: IEntity): IEntityInput => {
  return {
    name: entity.name,
    description: entity.description,
    image: entity.image,
    html: entity.html,
    css: entity.css,
    uuid: entity.uuid,
  }
}
