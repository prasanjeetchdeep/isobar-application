import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Checks if Search Result is present ', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Search Result/i);
  expect(linkElement).toBeInTheDocument();
});
