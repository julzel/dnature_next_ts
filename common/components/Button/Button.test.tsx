import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

describe('Button component', () => {
  let mockOnClick: jest.Mock;
  const label = 'Click me';
  const icon = faPlus;

  beforeEach(() => {
    mockOnClick = jest.fn();
  });

  it('should render without errors', () => {
    const { getByText, getByTestId } = render(
      <Button label={label} icon={icon} onClick={mockOnClick} />
    );
    expect(getByText(label)).toBeInTheDocument();
    expect(getByTestId('button-icon')).toBeInTheDocument();
  });

  it('should call onClick function on button click', () => {
    const { getByText } = render(
      <Button label={label} icon={icon} onClick={mockOnClick} />
    );
    fireEvent.click(getByText(label));
    expect(mockOnClick).toHaveBeenCalled();
  });
});
