import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the LEO brand in the nav', () => {
  render(<App />);
  const brand = screen.getAllByText(/LEO/i)[0];
  expect(brand).toBeInTheDocument();
});
