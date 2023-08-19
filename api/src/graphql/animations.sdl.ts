export const schema = gql`
  type Animation {
    id: Int!
    name: String!
    description: String
    uuid: String!
    animationHistoryId: Int!
    AnimationHistory: AnimationHistory!
    version: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    tracks: [AnimationTrack]!
    entities: [AnimationEntity]!
  }

  type Query {
    animations: [Animation!]! @requireAuth
    animation(id: Int!): Animation @requireAuth
    animationByHistoryUuidAndVersion(
      animationHistoryUuid: String!
      version: Int!
    ): Animation @requireAuth
  }

  input CreateAnimationInput {
    name: String!
    description: String
    uuid: String
    animationHistoryId: Int!
    version: Int!
    tracks: [CreateAnimationTrackInput!]
    entities: [CreateAnimationEntityInput!]
  }

  input UpdateAnimationInput {
    name: String
    description: String
    uuid: String
    animationHistoryId: Int
    version: Int
  }

  type Mutation {
    createAnimation(input: CreateAnimationInput!): Animation! @requireAuth
    updateAnimation(id: Int!, input: UpdateAnimationInput!): Animation!
      @requireAuth
    deleteAnimation(id: Int!): Animation! @requireAuth
  }
`
