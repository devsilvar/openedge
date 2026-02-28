import { CheckCircle2 } from 'lucide-react';

interface SuccessAnimationProps {
  message?: string;
  onClose?: () => void;
}

export default function SuccessAnimation({
  message = 'Success!',
  onClose,
}: SuccessAnimationProps) {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm fade-in'>
      <div className='bg-white rounded-2xl p-8 shadow-2xl max-w-md w-full mx-4 scale-in'>
        <div className='flex flex-col items-center text-center'>
          {/* Success Icon with Animation */}
          <div className='relative mb-6'>
            <div className='absolute inset-0 bg-green-100 rounded-full blur-xl opacity-50 animate-ping'></div>
            <div className='relative w-20 h-20 bg-green-500 rounded-full flex items-center justify-center'>
              <CheckCircle2 className='w-12 h-12 text-white checkmark-animate' strokeWidth={2.5} />
            </div>
          </div>

          {/* Success Message */}
          <h3 className='text-2xl font-bold text-gray-900 mb-2'>
            Submission Successful!
          </h3>
          <p className='text-gray-600 mb-6'>
            {message}
          </p>

          {/* Close Button */}
          {onClose && (
            <button
              onClick={onClose}
              className='bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 btn-magnetic'
            >
              Continue
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
