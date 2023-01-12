import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Carousel from './Carousel';

describe('Carousel', () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  test.skip('renders the correct number of items', () => {
    const { getAllByTestId } = render(
      <Carousel slideInterval={2000} items={items} />
    );
    const carouselItems = getAllByTestId('carousel-item');

    expect(carouselItems.length).toBe(3);
  });

  test.skip('displays the first item as active', () => {
    const { getByTestId } = render(
      <Carousel slideInterval={2000} items={items} />
    );
    const firstItem = getByTestId('carousel-item-0');

    expect(firstItem).toHaveClass('active');
  });

  test.skip('switching to the next item', () => {
    const { getByTestId, getByText } = render(
      <Carousel slideInterval={2000} items={items} />
    );
    const nextButton = getByText('Next');

    fireEvent.click(nextButton);
    const secondItem = getByTestId('carousel-item-1');

    expect(secondItem).toHaveClass('active');
  });

  test.skip('switching to the previous item', () => {
    const { getByTestId, getByText } = render(
      <Carousel slideInterval={2000} items={items} />
    );
    const prevButton = getByText('Previous');

    fireEvent.click(prevButton);
    const lastItem = getByTestId('carousel-item-2');

    expect(lastItem).toHaveClass('active');
  });
});
