export const schema = gql`
  type AnimationHistory {
    id: String!
    name: String!
    description: String
    revisions: [Animation]!
    currentRevisionId: Int
    createdAt: DateTime!
    updatedAt: DateTime!
    forkedFromHistoryId: String
  }

  type Query {
    animationHistories: [AnimationHistory!]! @requireAuth
    animationHistory(id: String!): AnimationHistory @requireAuth
  }

  input CreateAnimationHistoryInput {
    name: String!
    description: String
    currentRevisionId: Int
    forkedFromHistoryId: String
  }

  input UpdateAnimationHistoryInput {
    name: String
    description: String
    currentRevisionId: Int
    forkedFromHistoryId: String
  }

  type Mutation {
    createAnimationHistory(
      input: CreateAnimationHistoryInput!
    ): AnimationHistory! @requireAuth
    createAnimationHistoryForStartAnimating: AnimationHistory! @requireAuth
    updateAnimationHistory(
      id: String!
      input: UpdateAnimationHistoryInput!
    ): AnimationHistory! @requireAuth
    deleteAnimationHistory(id: String!): AnimationHistory! @requireAuth
  }
`
