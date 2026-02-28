import { CheckCircle2, X } from 'lucide-react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface TrainingSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TrainingSuccessModal({ isOpen, onClose }: TrainingSuccessModalProps) {
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
          aria-label='Close'
        >
          <X className='w-5 h-5' />
        </button>

        {/* Header with Gradient */}
        <div className='bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-6 text-center'>
          <div className='inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-3 animate-scaleIn'>
            <CheckCircle2 className='w-9 h-9 text-green-500' strokeWidth={2.5} />
          </div>
          <h2 className='text-2xl font-bold text-white mb-1'>
            Application Submitted!
          </h2>
          <p className='text-blue-50 text-sm'>
            Your training application has been received
          </p>
        </div>

        {/* Content */}
        <div className='px-8 py-6'>
          <div className='space-y-3 mb-6'>
            <h3 className='text-sm font-bold text-gray-800 mb-3'>
              What happens next:
            </h3>
            
            <div className='space-y-2.5 text-[13px] text-gray-600'>
              <div className='flex items-start gap-2.5'>
                <span className='text-blue-500 font-bold mt-0.5'>✓</span>
                <span>Applications are reviewed weekly</span>
              </div>
              <div className='flex items-start gap-2.5'>
                <span className='text-blue-500 font-bold mt-0.5'>✓</span>
                <span>Shortlisted candidates will be contacted for a screening call</span>
              </div>
              <div className='flex items-start gap-2.5'>
                <span className='text-blue-500 font-bold mt-0.5'>✓</span>
                <span>Only qualified applicants are admitted into each cohort</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={onClose}
            className='w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold py-3.5 px-6 rounded-lg transition-all duration-300 hover:shadow-lg'
          >
            Got it, Thanks!
          </button>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
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
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .animate-scaleIn {
          animation: scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </div>,
    document.body
  );
}
