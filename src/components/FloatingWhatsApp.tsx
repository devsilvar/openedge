import { MessageCircle, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipClosedPermanently, setTooltipClosedPermanently] = useState(false);

  useEffect(() => {
    // Check if tooltip was closed in this session
    const wasTooltipClosed = sessionStorage.getItem('whatsappTooltipClosed');
    if (wasTooltipClosed === 'true') {
      setTooltipClosedPermanently(true);
    }

    const handleScroll = () => {
      // Show after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
        // Show tooltip after 2 seconds ONLY if not closed before
        if (!wasTooltipClosed) {
          setTimeout(() => setShowTooltip(true), 2000);
        }
      } else {
        setIsVisible(false);
        if (!tooltipClosedPermanently) {
          setShowTooltip(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tooltipClosedPermanently]);

  const handleClick = () => {
    window.open('https://wa.me/2347047544000', '_blank');
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20 pointer-events-none'
        }`}
      >
        {/* Tooltip - Only show if not permanently closed */}
        {showTooltip && !tooltipClosedPermanently && (
          <div className='absolute bottom-full right-0 mb-3 w-64 bg-white rounded-lg shadow-2xl p-4 slide-in-right'>
            <button
              onClick={() => {
                setShowTooltip(false);
                setTooltipClosedPermanently(true);
                sessionStorage.setItem('whatsappTooltipClosed', 'true');
              }}
              className='absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors'
            >
              <X size={16} />
            </button>
            <p className='text-sm text-gray-800 font-semibold mb-1'>
              Need Help?
            </p>
            <p className='text-xs text-gray-600'>
              Chat with us on WhatsApp for quick support!
            </p>
          </div>
        )}

        {/* Button */}
        <button
          onClick={handleClick}
          className='group relative bg-[#25D366] hover:bg-[#20BA5A] text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 bounce-animation'
          aria-label='Chat on WhatsApp'
        >
          {/* Pulsing ring effect */}
          <span className='absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20'></span>
          
          <MessageCircle size={28} className='relative z-10' strokeWidth={2} />
          
          {/* Notification badge */}
          <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold animate-pulse'>
            1
          </span>
        </button>
      </div>
    </>
  );
}
