import { useState, useEffect } from 'react';

interface DragHandlerProps {
  ref: React.RefObject<HTMLDivElement | null>;
}

const useDragHandler = ({ ref }: DragHandlerProps) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const handleMouseDown = (event: MouseEvent): void => {
      setIsDragging(true);
      setStartX(event.pageX - element.offsetLeft);
      setScrollLeft(element.scrollLeft);
      element.style.cursor = 'grabbing';
    };

    const handleMouseMove = (event: MouseEvent): void => {
      if (!isDragging) return;
      const x = event.pageX - element.offsetLeft;
      const step = x - startX;
      element.scrollLeft = scrollLeft - step;
    };

    const handleMouseUp = (): void => {
      setIsDragging(false);
      element.style.cursor = 'grab';
    };

    const handleMouseLeave = (): void => {
      setIsDragging(false);
      element.style.cursor = 'grab';
    };

    element.addEventListener('mousedown', handleMouseDown);
    element.addEventListener('mouseup', handleMouseUp);
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousedown', handleMouseDown);
      element.removeEventListener('mouseup', handleMouseUp);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [ref, isDragging, startX, scrollLeft]);
};

export default useDragHandler;