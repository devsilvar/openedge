import { useState, useEffect } from 'react';
import { ArrowRight, X } from 'lucide-react';

export default function StickyBottomCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled > 500 && !isDismissed) {
        setIsVisible(true);
      } else if (scrolled <= 500) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  if (isDismissed) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transform transition-all duration-500 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className='bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 shadow-2xl'>
        <div className='max-w-6xl mx-auto flex lg:flex-row flex-col items-center justify-between gap-4'>
          <div className='flex-1'>
            <p className='text-lg font-bold'>
              Ready to fix your hospitality business?
            </p>
            <p className='text-sm text-blue-100'>
              Book a health check or join our training program
            </p>
          </div>

          <div className='flex items-center gap-3'>
            <a href='/book-health-check'>
              <button className='bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center gap-2 hover:scale-105 shadow-lg'>
                Book Health Check
                <ArrowRight className='w-4 h-4' />
              </button>
            </a>

            <button
              onClick={() => setIsDismissed(true)}
              className='text-white hover:bg-white/20 p-2 rounded-full transition-colors'
              aria-label='Dismiss'
            >
              <X className='w-5 h-5' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
