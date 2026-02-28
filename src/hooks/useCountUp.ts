import { useEffect, useState } from 'react';
import { useScrollReveal } from './useScrollReveal';

interface UseCountUpOptions {
  end: number;
  duration?: number;
  start?: number;
}

export function useCountUp({ end, duration = 2000, start = 0 }: UseCountUpOptions) {
  const [count, setCount] = useState(start);
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(start + (end - start) * easeOutQuad(progress)));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, end, duration, start]);

  return { count, ref };
}

// Easing function for smooth animation
function easeOutQuad(t: number): number {
  return t * (2 - t);
}
