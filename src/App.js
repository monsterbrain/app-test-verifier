import React from 'react';
import TestSection from './TestSection';
import { testCases } from './testCases.json';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Test Cases</h1>
      </header>
      <main>
        {testCases.map((section) => (
          <TestSection
            key={section.section}
            section={section.section}
            tests={section.tests}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
