import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('renders app header', () => {
  render(<App />);
  const header = screen.getByText('Weather app')
  expect(header).toBeInTheDocument();
});

test('renders input', () => {
  render(<App />);
  const inputTextBox = screen.getByPlaceholderText("Enter town");
  expect(inputTextBox).toBeInTheDocument();
});

test('renders search button', () => {
  render(<App />);
  const button = screen.getByRole("button", { name: 'Search' });
  expect(button).toBeInTheDocument();
});