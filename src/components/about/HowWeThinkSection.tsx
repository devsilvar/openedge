import { CheckCircle2, XCircle } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function HowWeThinkSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section className='bg-gray-50 py-12 sm:py-16 md:py-20'>
      <div ref={ref} className='max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <p className='text-[11px] sm:text-[12px] font-bold tracking-widest text-[var(--color-brandBlue)] uppercase mb-3'>
            OUR MINDSET
          </p>
          <h2 className='text-[28px] sm:text-[32px] md:text-[34px] leading-tight font-bold text-[var(--color-heading)] mb-4'>
            How We Think
          </h2>
          <p className='text-[15px] sm:text-[17px] md:text-[18px] text-[var(--color-muted)]'>
            Our mindset dictates our results. We are clear about where we stand.
          </p>
        </div>

        {/* Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10'>
          {/* What We Believe */}
          <div className={`group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 border border-gray-100 hover:-translate-y-1 card-magnetic ${isVisible ? 'stagger-1' : 'opacity-0'}`}>
            <div className='flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6'>
              <div className='w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-green-50 group-hover:bg-green-100 transition-colors duration-300'>
                <CheckCircle2 className='w-6 h-6 sm:w-7 sm:h-7 text-green-600' strokeWidth={2} />
              </div>
              <h3 className='text-[16px] sm:text-[18px] font-bold text-[var(--color-heading)]'>
                What We Believe
              </h3>
            </div>

            <ul className='space-y-3 sm:space-y-4 text-[14px] sm:text-[16px] md:text-[17px] text-[var(--color-muted)]'>
              <li className='flex items-start gap-3'>
                <span className='text-green-600 mt-0.5'>•</span>
                <span>Strong people fail in weak systems</span>
              </li>
              <li className='flex items-start gap-3'>
                <span className='text-green-600 mt-0.5'>•</span>
                <span>Ownership and management must be clearly separated</span>
              </li>
              <li className='flex items-start gap-3'>
                <span className='text-green-600 mt-0.5'>•</span>
                <span>Middle management determines whether a business works or leaks value</span>
              </li>
              <li className='flex items-start gap-3'>
                <span className='text-green-600 mt-0.5'>•</span>
                <span>Legacy is built through structure, not effort alone</span>
              </li>
            </ul>
          </div>

          {/* What We Do Not Believe */}
          <div className={`group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 border border-gray-100 hover:-translate-y-1 card-magnetic ${isVisible ? 'stagger-2' : 'opacity-0'}`}>
            <div className='flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6'>
              <div className='w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-red-50 group-hover:bg-red-100 transition-colors duration-300'>
                <XCircle className='w-6 h-6 sm:w-7 sm:h-7 text-red-600' strokeWidth={2} />
              </div>
              <h3 className='text-[16px] sm:text-[18px] font-bold text-[var(--color-heading)]'>
                What We Do Not Believe
              </h3>
            </div>

            <ul className='space-y-3 sm:space-y-4 text-[14px] sm:text-[16px] md:text-[17px] text-[var(--color-muted)]'>
              <li className='flex items-start gap-3'>
                <span className='text-red-600 mt-0.5'>•</span>
                <span>Quick fixes</span>
              </li>
              <li className='flex items-start gap-3'>
                <span className='text-red-600 mt-0.5'>•</span>
                <span>Motivational talk</span>
              </li>
              <li className='flex items-start gap-3'>
                <span className='text-red-600 mt-0.5'>•</span>
                <span>Generic consulting frameworks</span>
              </li>
            </ul>

            <p className='text-[17px] text-[var(--color-muted)] mt-6 italic'>
              We assess, fix, and stabilise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
