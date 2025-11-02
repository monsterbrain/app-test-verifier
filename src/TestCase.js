import React from 'react';

const TestCase = ({ id, description }) => {
  return (
    <div className="test-case">
      <div className="test-case-id">{id}</div>
      <div className="test-case-description">{description}</div>
      <div className="test-case-actions">
        <label>
          <input type="checkbox" />
          OK
        </label>
        <label>
          <input type="checkbox" />
          Fail
        </label>
      </div>
    </div>
  );
};

export default TestCase;
