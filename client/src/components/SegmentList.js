import { responsePathAsArray } from 'graphql';
import React from 'react';
import { fetchReq } from './maps/stravaApi';

class SegmentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      segments: []
    }
  }
  componentDidMount() {
    // make api request
    fetchReq(segmentsUrl)
      .then((response) => {
        this.setState({
          segments: response.segments
        })
      })
  }
    // if (!this.state.segments.length) {
    //   return <h3>No segments Yet</h3>;
    // }
  render() {
      this.state.segments.map((segments) => (
        <div key={segment._id} className="card mb-3">
          <h4 className="card-header bg-primary text-light p-2 m-0">
            {segment.segmentAuthor} <br />
            <span style={{ fontSize: '1rem' }}>
              had this segment on {segment.createdAt}
            </span>
          </h4>
          <div className="card-body bg-light p-2">
            <p>{segment.segmentText}</p>
          </div>
        </div>
))};
};

export default SegmentList;
