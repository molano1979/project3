import { gql } from '@apollo/client';

export const ADD_SEGMENT = gql`
  mutation addSegment($segmentName: String!, elevation_profile: String!) {
    addThought(segmentName: $segmentName, elevation_profile: $elevation_profile) {
      _id
      name
      elevation_profile
      createdAt
    }
  }
`;

export const ADD_USER = gql`
  mutation addAthlete($athlete_type: String!, $activity_type: String!) {
    addAthlete(athlete_type: $athlete_type, activity_type: $activity_type) {
      _id
      activity_type
      athlete_type
    }
  }`