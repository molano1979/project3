import React from "react";
import { Query, Mutation } from "react-apollo";
import { Redirect } from "react-router-dom";
import { gql } from "apollo-boost";

const ADD_SEGMENT = gql`
  mutation addSegment(
    $name: String!
    $elevation_profile: String!
    $average_grade: Float!
    $authorId: Int!
  ) {
    addSegment(
      name: $name
      elevation_profile: $elevation_profile
      average_grade: $average_grade
      athleteId: $athleteId
    ) {
      id
      name
      elevation_profile
      average_grade
    }
  }
`;

export default () => (
  <Mutation
    mutation={ADD_SEGMENT}
    onCompleted={() => (window.location.href = "/add")}
  >
    {(addSegment, { data, loading, error }) => (
      <div>
        <div className="w-100 pa4 flex justify-center">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addSegment({
                variables: {
                  name: this.name.value,
                  elevation_profile: this.elevation_profile.value,
                  average_grade: parseFloat(this.average_grade.value),
                  athleteId: parseInt(this.athleteId.value),
                },
              });

              this.name.value = "";
              this.elevation_profile.value = "";
              this.average_grade.value = "";
              this.athleteId.value = "";
            }}
          >
            <div style={{ maxWidth: 400 }} className="">
              <label> Segment name: </label>
              <input
                className="w-100 pa3 mv2"
                type="text"
                required
                placeholder="name of the segment"
                ref={(node) => (this.name = node)}
              />

              <label> Elevation Profile: </label>
              <input
                className="w-100 pa3 mv2"
                type="url"
                required
                placeholder="Image Url"
                ref={(node) => (this.elevation_profile = node)}
              />

              <label> Average Grade: </label>
              <input
                className="w-100 pa3 mv2"
                type="number"
                required
                min="3"
                max="50"
                placeholder="Average % Grade"
                ref={(node) => (this.average_grade = node)}
              />

              <label> Athlete: </label>
              <select
                ref={(select) => (this.athleteId = select)}
                name="authorId"
                required
              >
                <option value="">Select an athletics type</option>
                <option value="1">Runner</option>
                <option value="2">Cyclist</option>
              </select>
            </div>
            {loading && <p>Loading...</p>}
            {error && <p>Error :( Please try again</p>}

            <button type="submit">Add Segment</button>
          </form>
        </div>
      </div>
    )}
  </Mutation>
);
