import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the test cases heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Test Cases/i);
  expect(headingElement).toBeInTheDocument();
});
