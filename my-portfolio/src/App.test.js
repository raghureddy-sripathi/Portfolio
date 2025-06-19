import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Raghavender Reddy Sripathi/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders resume button', () => {
  render(<App />);
  const resumeButton = screen.getByRole('link', { name: /view resume/i });
  expect(resumeButton).toBeInTheDocument();
});

