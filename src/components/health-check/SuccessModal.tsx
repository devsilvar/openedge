import { CheckCircle2, X } from 'lucide-react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div 
      className='fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn'
      onClick={onClose}
    >
      <div 
        className='relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden animate-slideUp'
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10'
          aria-label='Close modal'
        >
          <X className='w-6 h-6' />
        </button>

        {/* Success Icon */}
        <div className='bg-gradient-to-br from-green-50 to-blue-50 pt-12 pb-10 px-8 text-center'>
          <div className='inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4 animate-scaleIn'>
            <CheckCircle2 className='w-9 h-9 text-white' strokeWidth={2.5} />
          </div>
          <h2 className='text-2xl font-extrabold text-[var(--color-heading)] mb-2'>
            Application Submitted!
          </h2>
          <p className='text-sm text-[var(--color-muted)]'>
            We'll review your submission within 48 hours
          </p>
        </div>

        {/* Content */}
        <div className='px-8 py-6'>
          <h3 className='text-base font-bold text-[var(--color-heading)] mb-3'>
            What Happens Next
          </h3>
          
          <div className='space-y-2.5 mb-5'>
            <div className='flex items-start gap-2.5'>
              <div className='flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-[var(--color-brandBlue)] flex items-center justify-center text-xs font-bold mt-0.5'>
                ✓
              </div>
              <p className='text-[13px] text-[var(--color-text)] leading-snug'>
                We qualify your business
              </p>
            </div>

            <div className='flex items-start gap-2.5'>
              <div className='flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-[var(--color-brandBlue)] flex items-center justify-center text-xs font-bold mt-0.5'>
                ✓
              </div>
              <p className='text-[13px] text-[var(--color-text)] leading-snug'>
                If qualified, we schedule your in-person assessment
              </p>
            </div>

            <div className='flex items-start gap-2.5'>
              <div className='flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 text-[var(--color-brandBlue)] flex items-center justify-center text-xs font-bold mt-0.5'>
                ✓
              </div>
              <p className='text-[13px] text-[var(--color-text)] leading-snug'>
                You'll hear from us via email or WhatsApp
              </p>
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={onClose}
            className='mt-4 w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]'
          >
            Got it, Thanks!
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0);
          }
          to {
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </div>,
    document.body
  );
}
