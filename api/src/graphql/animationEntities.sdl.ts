export const schema = gql`
  type AnimationEntity {
    id: Int!
    name: String!
    description: String
    uuid: String!
    revisionId: Int!
    revision: Animation!
    createdAt: DateTime!
    updatedAt: DateTime!
    image: String!
    html: String!
    css: String!
    clip: [AnimationTrackClip]!
  }

  type Query {
    animationEntities: [AnimationEntity!]! @requireAuth
    animationEntity(id: Int!): AnimationEntity @requireAuth
  }

  input CreateAnimationEntityInput {
    name: String!
    description: String
    uuid: String!
    revisionId: Int!
    image: String!
    html: String!
    css: String!
  }

  input UpdateAnimationEntityInput {
    name: String
    description: String
    uuid: String
    revisionId: Int
    image: String
    html: String
    css: String
  }

  type Mutation {
    createAnimationEntity(input: CreateAnimationEntityInput!): AnimationEntity!
      @requireAuth
    updateAnimationEntity(
      id: Int!
      input: UpdateAnimationEntityInput!
    ): AnimationEntity! @requireAuth
    deleteAnimationEntity(id: Int!): AnimationEntity! @requireAuth
  }
`
