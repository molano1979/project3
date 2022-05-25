import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import "../App.css";

const LIST_HILLS = gql`
  query AllSegments {
    segments {
      id
      name
      elevation_profile
      average_grade
      climb_length
    }
  }
`;

export default () => (
  <Query query={LIST_HILLS}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error...</p>;
      
      
      return (
        <div className="col-sm-12">
          {!loading &&
            data.segments.map((segment) => (
              <div className="col-sm-4" key={segment.id}>
                <div className="pa3 bg-black-05 ma3">
                  <div
                    style={{
                      backgroundImage: `url(${segment.elevation_profilel})`,
                      backgroundSize: "cover",
                      paddingBottom: "100%",
                    }}
                  />
                  <div>
                    <div className="movie">
                      <h3 align="center"> {segment.name}&nbsp; </h3>
                      <h4 align="center">
                        Average Grade: {segment.average_grade}
                      </h4>
                      <h4 align="center">
                        Climb Length: {segment.climb_length}
                      </h4>
                      <h4 align="center">
                        Starting point:
                        <p>{segment.lat_location}</p>
                        <p>{segment.lon_location}</p>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      );
    }}
  </Query>
);
