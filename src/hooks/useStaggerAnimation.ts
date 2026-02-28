import { useEffect, useState } from 'react';
import { useScrollReveal } from './useScrollReveal';

export function useStaggerAnimation(itemCount: number) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const [activeItems, setActiveItems] = useState<boolean[]>(new Array(itemCount).fill(false));

  useEffect(() => {
    if (!isVisible) return;

    const timers: ReturnType<typeof setTimeout>[] = [];
    
    for (let i = 0; i < itemCount; i++) {
      const timer = setTimeout(() => {
        setActiveItems(prev => {
          const newItems = [...prev];
          newItems[i] = true;
          return newItems;
        });
      }, i * 100);
      timers.push(timer);
    }

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [isVisible, itemCount]);

  return { ref, activeItems };
}
