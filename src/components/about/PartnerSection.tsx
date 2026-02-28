import { Building2, Utensils, Home, Music } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function PartnerSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section className='py-12 sm:py-16 md:py-20 bg-white'>
      <div ref={ref} className='max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16'>
        {/* Left */}
        <div className={isVisible ? 'slide-in-left' : 'opacity-0'}>
          <p className='text-[11px] sm:text-[12px] font-bold tracking-widest text-[var(--color-brandBlue)] uppercase mb-3'>
            OUR PARTNERS
          </p>
          <h3 className='text-[24px] sm:text-[26px] md:text-[28px] font-bold text-[var(--color-heading)] mb-4 sm:mb-5'>
            Who We Work With
          </h3>

          <p className='text-[15px] sm:text-[17px] md:text-[18px] text-[var(--color-muted)] mb-8 sm:mb-10 max-w-md leading-[1.7]'>
            We partner with diverse players in the hospitality ecosystem who
            share our commitment to excellence.
          </p>

          <ul className='space-y-4 sm:space-y-5'>
            <li className='group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-gray-50 transition-all duration-300'>
              <div className='w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300 flex-shrink-0'>
                <Building2 className='w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-brandBlue)]' strokeWidth={2} />
              </div>
              <span className='text-[14px] sm:text-[15px] font-medium text-[var(--color-heading)]'>Boutique Hotels & Resorts</span>
            </li>
            <li className='group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-gray-50 transition-all duration-300'>
              <div className='w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300 flex-shrink-0'>
                <Utensils className='w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-brandBlue)]' strokeWidth={2} />
              </div>
              <span className='text-[14px] sm:text-[15px] font-medium text-[var(--color-heading)]'>Fine Dining & QSR Chains</span>
            </li>
            <li className='group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-gray-50 transition-all duration-300'>
              <div className='w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300 flex-shrink-0'>
                <Home className='w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-brandBlue)]' strokeWidth={2} />
              </div>
              <span className='text-[14px] sm:text-[15px] font-medium text-[var(--color-heading)]'>Serviced Apartments</span>
            </li>
            <li className='group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-gray-50 transition-all duration-300'>
              <div className='w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300 flex-shrink-0'>
                <Music className='w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-brandBlue)]' strokeWidth={2} />
              </div>
              <span className='text-[14px] sm:text-[15px] font-medium text-[var(--color-heading)]'>Event Centers & Lounges</span>
            </li>
          </ul>
        </div>

        {/* Right Card */}
        <div className={`bg-gradient-to-br from-[#0f172a] to-[#020617] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 text-white relative overflow-hidden shadow-xl animated-gradient ${isVisible ? 'slide-in-right' : 'opacity-0'}`}>
          <h3 className='text-[20px] sm:text-[22px] md:text-[24px] font-bold mb-4 sm:mb-5'>The Ideal Partner</h3>

          <p className='text-[14px] sm:text-[15px] leading-[1.7] text-gray-300 mb-8 sm:mb-10 max-w-md'>
            We work best with the{' '}
            <span className='text-[var(--color-primary)] font-medium'>
              serious owner
            </span>
            . The investor who is tired of excuses, tired of constant
            firefighting, and ready to implement the necessary changes to build
            a legacy asset.
          </p>

          <div className='text-[10px] sm:text-[11px] tracking-widest text-gray-400 mb-2 font-bold'>
            PROFILE
          </div>

          <div className='text-[14px] sm:text-[16px] font-bold'>
            Committed. Visionary. Ready for Truth.
          </div>

          <div className='absolute right-6 bottom-6 opacity-10'>
            <svg width='90' height='90' fill='none' viewBox='0 0 24 24'>
              <path
                d='M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5Zm0 2c-3.314 0-10 1.657-10 5v3h20v-3c0-3.343-6.686-5-10-5Z'
                fill='currentColor'
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
