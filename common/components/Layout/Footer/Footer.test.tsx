import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';

describe('Footer', () => {
  it('should render the current year', () => {
    const currentYear = new Date().getFullYear();
    const { getByText } = render(<Footer year={currentYear} />);

    expect(getByText(`Copyright ${currentYear}`)).toBeInTheDocument();
  });
});
