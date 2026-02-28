import { useState, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in'>
      <div className='bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 relative animate-scale-in'>
        <button
          onClick={() => setIsVisible(false)}
          className='absolute top-4 right-4 text-gray-400 hover:text-gray-600'
        >
          <X className='w-6 h-6' />
        </button>

        <div className='text-center'>
          <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
            <span className='text-3xl'>👋</span>
          </div>
          
          <h3 className='text-2xl font-bold text-gray-900 mb-3'>
            Wait! Before You Go...
          </h3>
          
          <p className='text-gray-600 mb-6 text-lg'>
            Is your hospitality business stuck in chaos? Get a FREE consultation to discover what is holding you back.
          </p>

          <div className='flex flex-col gap-3'>
            <a href='/book-health-check' onClick={() => setIsVisible(false)}>
              <button className='w-full bg-blue-600 text-white px-6 py-4 rounded-full font-bold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 shadow-lg'>
                Book FREE Health Check
                <ArrowRight className='w-5 h-5' />
              </button>
            </a>
            
            <button
              onClick={() => setIsVisible(false)}
              className='text-gray-500 hover:text-gray-700 py-2'
            >
              No thanks, I will stay stuck
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
