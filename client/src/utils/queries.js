import { gql } from '@apollo/client';

export const QUERY_ATHLETE = gql`
  query getAthlete {
    Athletes {
      _id
      name
      athlete_type
      activity_type
      email
      segments
      createdAt
    }
  }
`;
