import { useEffect, useState } from 'react';

/**
 * Detects when user is idle (no mouse movement or scrolling)
 * Useful for triggering attention-grabbing animations
 */
export function useIdleDetector(idleTime: number = 3000) {
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    let timeoutId: number;

    const resetTimer = () => {
      setIsIdle(false);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsIdle(true), idleTime);
    };

    // Track user activity
    const events = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    events.forEach(event => window.addEventListener(event, resetTimer));

    // Start initial timer
    resetTimer();

    return () => {
      clearTimeout(timeoutId);
      events.forEach(event => window.removeEventListener(event, resetTimer));
    };
  }, [idleTime]);

  return isIdle;
}
