export const schema = gql`
  type AnimationHistory {
    id: String!
    name: String!
    description: String
    revisions: [Animation]!
    currentRevisionId: Int
    createdAt: DateTime!
    updatedAt: DateTime!
    forkedFromId: Int
  }

  type Query {
    animationHistories: [AnimationHistory!]! @requireAuth
    animationHistory(id: Int!): AnimationHistory @requireAuth
  }

  input CreateAnimationHistoryInput {
    name: String!
    description: String
    uuid: String!
    currentRevisionId: Int
    forkedFromId: Int
  }

  input UpdateAnimationHistoryInput {
    name: String
    description: String
    uuid: String
    currentRevisionId: Int
    forkedFromId: Int
  }

  type Mutation {
    createAnimationHistory(
      input: CreateAnimationHistoryInput!
    ): AnimationHistory! @requireAuth
    updateAnimationHistory(
      id: Int!
      input: UpdateAnimationHistoryInput!
    ): AnimationHistory! @requireAuth
    deleteAnimationHistory(id: Int!): AnimationHistory! @requireAuth
  }
`
