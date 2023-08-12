export const schema = gql`
  type AnimationTrack {
    id: Int!
    name: String!
    description: String
    uuid: String!
    revisionId: Int!
    revision: Animation!
    createdAt: DateTime!
    updatedAt: DateTime!
    sortNumber: Int!
    color: String
    clips: [AnimationTrackClip]!
  }

  type Query {
    animationTracks: [AnimationTrack!]! @requireAuth
    animationTrack(id: Int!): AnimationTrack @requireAuth
  }

  input CreateAnimationTrackInput {
    name: String!
    description: String
    uuid: String!
    revisionId: Int!
    sortNumber: Int!
    color: String
  }

  input UpdateAnimationTrackInput {
    name: String
    description: String
    uuid: String
    revisionId: Int
    sortNumber: Int
    color: String
  }

  type Mutation {
    createAnimationTrack(input: CreateAnimationTrackInput!): AnimationTrack!
      @requireAuth
    updateAnimationTrack(
      id: Int!
      input: UpdateAnimationTrackInput!
    ): AnimationTrack! @requireAuth
    deleteAnimationTrack(id: Int!): AnimationTrack! @requireAuth
  }
`
