import React, { useState, useEffect, useCallback, useRef } from 'react';
import Button from '../Button/Button';

interface CarouselProps {
  items: any[];
  slideInterval: number; // time in ms between slides
}

interface CarouselState {
  currentIndex: number;
  initialX: number;
}

const Carousel: React.FC<CarouselProps> = ({ items, slideInterval }) => {
  const [state, setState] = useState<CarouselState>({
    currentIndex: 0,
    initialX: 0,
  });
  const carouselRef = useRef<HTMLDivElement>(null);

  const goToNextItem = useCallback(() => {
    setState((prevState) => {
      let nextIndex = prevState.currentIndex + 1;
      if (nextIndex === items.length) {
        nextIndex = 0;
      }
      return { currentIndex: nextIndex, initialX: prevState.initialX };
    });
  }, [items.length]);

  const goToPrevItem = useCallback(() => {
    setState((prevState) => {
      let prevIndex = prevState.currentIndex - 1;
      if (prevIndex < 0) {
        prevIndex = items.length - 1;
      }
      return { currentIndex: prevIndex, initialX: prevState.initialX };
    });
  }, [items.length]);

  const handleTouchStart = (e: TouchEvent) => {
    const touch = e.touches[0];
    // Save the initial touch position
    setState((prevState) => ({
      ...prevState,
      initialX: touch.clientX,
    }));
  };

  const handleTouchEnd = useCallback(
    (e: TouchEvent) => {
      const touch = e.changedTouches[0];
      const swipeThreshold = 30; // Threshold for determining a swipe

      // Compare the final touch position with the initial one
      if (touch.clientX < state.initialX - swipeThreshold) {
        // Left swipe
        goToPrevItem();
      } else if (touch.clientX > state.initialX + swipeThreshold) {
        // Right swipe
        goToNextItem();
      }
    },
    [goToNextItem, goToPrevItem, state.initialX]
  );

  useEffect(() => {
    const { current } = carouselRef;
    if (!current) return;
    // Add event listeners for swiping on mobile devices
    current.addEventListener('touchstart', handleTouchStart);
    current.addEventListener('touchend', handleTouchEnd);

    // Start slide interval
    const intervalId = setInterval(() => goToNextItem(), slideInterval);

    // Clean up event listeners and interval when component unmounts
    return () => {
      if (!current) return;
      current.removeEventListener('touchstart', handleTouchStart);
      current.removeEventListener('touchend', handleTouchEnd);
      clearInterval(intervalId);
    };
  }, [goToNextItem, handleTouchEnd, slideInterval]);

  return (
    <div className='carousel-container' ref={carouselRef}>
      <div className='carousel-items'>
        {items.map((item, index) => {
          let className = 'carousel-item';
          if (index === state.currentIndex) {
            className += ' active';
          }
          return (
            <div key={index} className={className}>
              {item}
            </div>
          );
        })}
      </div>
      <Button onClick={goToPrevItem} label={'Prev'} />
      <Button onClick={goToNextItem} label={'Next'} />
    </div>
  );
};

export default Carousel;
