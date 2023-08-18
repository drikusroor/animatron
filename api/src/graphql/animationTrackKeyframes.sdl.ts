export const schema = gql`
  type AnimationTrackKeyframe {
    id: Int!
    uuid: String!
    sort: Int!
    duration: Int!
    css: String!
    animationTrackClipId: Int
    clip: AnimationTrackClip
  }

  type Query {
    animationTrackKeyframes: [AnimationTrackKeyframe!]! @requireAuth
    animationTrackKeyframe(id: Int!): AnimationTrackKeyframe @requireAuth
  }

  input CreateAnimationTrackKeyframeInput {
    uuid: String
    sort: Int!
    duration: Int!
    css: String!
  }

  input UpdateAnimationTrackKeyframeInput {
    uuid: String
    sort: Int
    duration: Int
    css: String
    animationTrackClipId: Int
  }

  type Mutation {
    createAnimationTrackKeyframe(
      input: CreateAnimationTrackKeyframeInput!
    ): AnimationTrackKeyframe! @requireAuth
    updateAnimationTrackKeyframe(
      id: Int!
      input: UpdateAnimationTrackKeyframeInput!
    ): AnimationTrackKeyframe! @requireAuth
    deleteAnimationTrackKeyframe(id: Int!): AnimationTrackKeyframe! @requireAuth
  }
`
