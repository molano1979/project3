const { gql } = require('apollo-server');

const typeDefs = gql`
  type Athlete {
    id: Int!
    athlete_type: String!
    activity_type: String!
    segment: [Segment]!
  }

  type Segment {
    id: Int!
    name: String!
    elevation_profile: String!
    average_grade: Float!
    climb_length: Float!
    lat_location: Float!
    lon_location: Float!
    athlete: Athlete!
  }

  type Query {
    segments: [Segment!]!
    segment(id: Int!): Segment!
    athlete(id: Int!): Athlete!
  }

  type Mutation {
    addSegment(
      name: String!
      elevation_profile: String!
      average_grade: Float!
      climb_length: Float!
      lat_location: Float!
      lon_location: Float!
      athleteId: Int!
    ): Segment!
  }
`;

module.exports = typeDefs;