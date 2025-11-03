import React from 'react';

const TestCase = ({ id, description, status, onStatusChange }) => {
  const handleOKClick = () => {
    const newStatus = status === 'OK' ? null : 'OK';
    onStatusChange(id, newStatus);
  };

  const handleFailClick = () => {
    const newStatus = status === 'Fail' ? null : 'Fail';
    onStatusChange(id, newStatus);
  };

  return (
    <div className="test-case">
      <div className="test-case-id">{id}</div>
      <div className="test-case-description">{description}</div>
      <div className="test-case-actions">
        <span
          className={`icon ${status === 'OK' ? 'ok' : ''}`}
          onClick={handleOKClick}
        >
          &#10004;
        </span>
        <span
          className={`icon ${status === 'Fail' ? 'fail' : ''}`}
          onClick={handleFailClick}
        >
          &#10006;
        </span>
      </div>
    </div>
  );
};

export default TestCase;
