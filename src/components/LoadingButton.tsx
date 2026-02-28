import { Loader2 } from 'lucide-react';

interface LoadingButtonProps {
  isLoading?: boolean;
  loadingText?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  className?: string;
  disabled?: boolean;
}

export default function LoadingButton({
  isLoading = false,
  loadingText = 'Processing...',
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  disabled = false,
}: LoadingButtonProps) {
  const baseClasses = 'relative inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed btn-magnetic btn-ripple';
  
  const variantClasses = variant === 'primary'
    ? 'bg-primary hover:bg-primary-dark text-white px-8 py-3.5 shadow-lg hover:shadow-xl'
    : 'bg-white border-2 border-primary text-primary px-8 py-3.5 hover:bg-gray-50 shadow-md hover:shadow-lg';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`${baseClasses} ${variantClasses} ${className} ${isLoading ? 'cursor-wait' : ''}`}
    >
      {isLoading && (
        <Loader2 className="w-5 h-5 animate-spin" />
      )}
      <span className={isLoading ? 'opacity-70' : ''}>
        {isLoading ? loadingText : children}
      </span>
    </button>
  );
}
