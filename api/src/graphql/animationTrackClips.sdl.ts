export const schema = gql`
  type AnimationTrackClip {
    id: Int!
    uuid: String!
    start: Int!
    animationTrackId: Int!
    track: AnimationTrack!
    animationEntityId: Int!
    entity: AnimationEntity!
    keyframes: [AnimationTrackKeyframe]!
  }

  type Query {
    animationTrackClips: [AnimationTrackClip!]! @requireAuth
    animationTrackClip(id: Int!): AnimationTrackClip @requireAuth
  }

  input CreateAnimationTrackClipInput {
    uuid: String
    start: Int!
    animationEntityUuid: String!
    keyframes: [CreateAnimationTrackKeyframeInput!]
  }

  input UpdateAnimationTrackClipInput {
    uuid: String
    start: Int
    animationTrackId: Int
    animationEntityId: Int
  }

  type Mutation {
    createAnimationTrackClip(
      input: CreateAnimationTrackClipInput!
    ): AnimationTrackClip! @requireAuth
    updateAnimationTrackClip(
      id: Int!
      input: UpdateAnimationTrackClipInput!
    ): AnimationTrackClip! @requireAuth
    deleteAnimationTrackClip(id: Int!): AnimationTrackClip! @requireAuth
  }
`
