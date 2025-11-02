import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the simple react app text', () => {
  render(<App />);
  const textElement = screen.getByText(/this is a simple react app/i);
  expect(textElement).toBeInTheDocument();
});
