import React, { useState } from 'react';
import TestCase from './TestCase';

const TestSection = ({ section, tests }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [testStatuses, setTestStatuses] = useState({});

  const handleStatusChange = (id, status) => {
    setTestStatuses((prevStatuses) => ({
      ...prevStatuses,
      [id]: status,
    }));
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const okCount = Object.values(testStatuses).filter(
    (status) => status === 'OK'
  ).length;

  return (
    <div className="test-section">
      <h2 onClick={toggleCollapse}>
        <span className={`arrow ${isCollapsed ? 'down' : 'up'}`}></span>
        {section}
        <span className="ok-count">
          {okCount}/{tests.length} OK
        </span>
      </h2>
      {!isCollapsed && (
        <div className="test-cases">
          {tests.map((test) => (
            <TestCase
              key={test.id}
              {...test}
              status={testStatuses[test.id]}
              onStatusChange={handleStatusChange}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TestSection;
