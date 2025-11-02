import React, { useState } from 'react';
import TestCase from './TestCase';

const TestSection = ({ section, tests }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="test-section">
      <h2 onClick={toggleCollapse}>{section}</h2>
      {!isCollapsed && (
        <div className="test-cases">
          {tests.map((test) => (
            <TestCase key={test.id} {...test} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TestSection;
