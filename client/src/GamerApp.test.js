import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GamerApp from './GamerApp';

test('<GamerApp /> the application works correctly ', () => {
  render(<GamerApp />);
  expect(screen.getByText('Ingresar')).toBeInTheDocument();
 
  //  expect(screen.getAllByTestId('title_app').textContent).toBe('Video Games App');
});
