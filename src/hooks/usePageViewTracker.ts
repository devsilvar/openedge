import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';
import { logPageVisit } from '@/utils/visitorTracker';

export function usePageViewTracker() {
  const location = useLocation();
  const lastLoggedRef = useRef<string>('');

  useEffect(() => {
    const path = location.pathname + location.search;
    
    if (path !== lastLoggedRef.current) {
      lastLoggedRef.current = path;
      setTimeout(() => {
        logPageVisit(window.location.href);
      }, 500);
    }
  }, [location]);
}
