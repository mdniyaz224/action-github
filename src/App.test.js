import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app heading', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /action github/i });
  expect(heading).toBeInTheDocument();
});

test('renders welcome message', () => {
  render(<App />);
  const message = screen.getByText(/build, test, deploy, and ship with confidence/i);
  expect(message).toBeInTheDocument();
});
