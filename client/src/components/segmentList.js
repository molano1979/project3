import React from 'react';

const segmentList = ({ segments, title }) => {
  if (!segments.length) {
    return <h3>No segments Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {segments &&
        segments.map((segment) => (
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
        ))}
    </div>
  );
};

export default segmentList;
