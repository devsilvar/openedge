import { Link } from 'react-router';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonAction?: () => void;
  secondaryButtonAction?: () => void;
  backgroundColor?: string;
  textColor?: string;
  descriptionColor?: string;
  variant?: 'light' | 'dark' | 'gradient';
}

export default function CTASection({
  title = 'Ready to reclaim your time and build a legacy?',
  description = "Stop being the Chief Firefighter. Let's build a self-sustaining hospitality business together.",
  primaryButtonText = 'Book a Hospitality Health Check',
  secondaryButtonText = 'Join Open Edge Training',
  primaryButtonAction,
  secondaryButtonAction,
  backgroundColor,
  textColor,
  descriptionColor,
  variant = 'light',
}: CTASectionProps = {}) {
  // Determine background class based on variant
  const bgClass = backgroundColor
    ? backgroundColor
    : variant === 'dark'
      ? 'bg-gradient-to-br from-[#0b1d3a] via-[#1f4f82] to-[#2563eb]'
      : variant === 'gradient'
        ? 'bg-gradient-to-br from-blue-50 via-white to-blue-50'
        : 'bg-white';

  // Determine text colors based on variant
  const titleColor = textColor
    ? textColor
    : variant === 'dark'
      ? 'text-white'
      : 'text-[var(--color-heading)]';

  const descColor = descriptionColor
    ? descriptionColor
    : variant === 'dark'
      ? 'text-blue-100'
      : 'text-[var(--color-muted)]';

  // Button styles based on variant
  const primaryBtnClass =
    variant === 'dark'
      ? 'bg-white hover:bg-gray-100 text-[var(--color-brandBlue)] text-[13.5px] font-semibold px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 btn-magnetic btn-ripple'
      : 'bg-primary hover:bg-primary-dark text-white text-[13.5px] font-semibold px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 btn-magnetic btn-ripple';

  const secondaryBtnClass =
    variant === 'dark'
      ? 'bg-transparent border-2 border-white hover:bg-white/10 text-white text-[13.5px] font-semibold px-7 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg btn-magnetic'
      : 'bg-white border-2 border-primary hover:bg-gray-50 text-primary text-[13.5px] font-semibold px-7 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg btn-magnetic';

  return (
    <section className={`w-full py-20 ${bgClass}`}>
      <div className='mx-auto max-w-[750px] px-6 text-center'>
        <h2
          className={`text-[32px] md:text-[36px] font-bold ${titleColor} mb-4 leading-tight`}
        >
          {title}
        </h2>

        {description && (
          <p className={`text-[18px] ${descColor} mb-8 leading-[1.7]`}>
            {description}
          </p>
        )}

        <div className='flex flex-col sm:flex-row items-center justify-center gap-3'>
          {primaryButtonText && (
            <Link to='/book-health-check'>
              <button onClick={primaryButtonAction} className={primaryBtnClass}>
                {primaryButtonText}
              </button>
            </Link>
          )}
          {secondaryButtonText && (
            <Link to='/training'>
              <button
                onClick={secondaryButtonAction}
                className={secondaryBtnClass}
              >
                {secondaryButtonText}
              </button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
