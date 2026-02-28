import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { logo } from '@/assets';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCountUp } from '@/hooks/useCountUp';

export default function BookHealthCheckHero() {
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal({
    threshold: 0.1,
  });
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal({
    threshold: 0.1,
  });
  const { count: businessCount, ref: countRef } = useCountUp({
    end: 50,
    duration: 2000,
  });

  const scrollToProcess = () => {
    document
      .getElementById('process-section')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className='relative pt-12 sm:pt-16 pb-16 sm:pb-20 overflow-hidden'>
      {/* Decorative background elements - Animated */}
      <div className='absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 animate-pulse'></div>
      <div
        className='absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20 animate-pulse'
        style={{ animationDelay: '1s' }}
      ></div>

      <div className='mx-auto max-w-[1200px] px-4 sm:px-6 relative z-10'>
        <div className='grid lg:grid-cols-[55%_45%] gap-8 sm:gap-12 items-center'>
          {/* LEFT - Content */}
          <div
            ref={contentRef}
            className={`flex flex-col justify-center ${contentVisible ? 'slide-in-left' : 'opacity-0'}`}
          >
            {/* Eyebrow */}
            <div className='inline-flex items-center gap-2 mb-5'>
              <p className='text-[12px] font-bold tracking-widest text-[var(--color-brandBlue)] uppercase'>
                Hospitality Health Check
              </p>
            </div>

            {/* Headline */}
            <h1 className='text-[32px] sm:text-[38px] md:text-[40px] leading-[1.2] font-extrabold tracking-tight text-heading mb-6'>
              If your hospitality business is busy but not working, this is
              where you start.
            </h1>

            {/* Subheadline */}
            <p className='text-[16px] sm:text-[18px] md:text-[20px] leading-[1.4] font-bold mb-5'>
              <em>
                Most hospitality owners don't need more advice. They need
                clarity and a solution that works.
              </em>
            </p>

            {/* Body */}
            <p className='mt-3 text-[16px] sm:text-[17px] leading-[1.7] text-muted max-w-[520px]'>
              The Open Edge Hospitality Health Check is not a free consultation.
              It is the first step serious owners take to fix the system and
              middle-management issues holding most hospitality businesses back.
            </p>

            {/* Stats Badge */}
            <div
              ref={countRef}
              className='inline-flex items-center gap-3 bg-white px-5 py-3 rounded-xl shadow-md border border-gray-100 mb-8 mt-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1'
            >
              <CheckCircle2 className='w-5 h-5 text-green-500 pulse-ring' />
              <span className='text-[14px] font-semibold text-[var(--color-heading)]'>
                Over{' '}
                <span className='text-primary font-bold'>{businessCount}+</span>{' '}
                businesses assessed
              </span>
            </div>

            {/* CTAs */}
            <div className='flex flex-col sm:flex-row items-start gap-4'>
              <a href='/health-check-form' className='w-full sm:w-auto'>
                <button className='w-full sm:w-auto bg-primary hover:bg-primary-dark text-white text-[15px] font-bold px-9 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2 btn-magnetic idle-pulse'>
                  Proceed to Application Form
                  <ArrowRight className='w-5 h-5' strokeWidth={2.5} />
                </button>
              </a>

              <button
                onClick={scrollToProcess}
                className='w-full sm:w-auto bg-white border-2 border-primary text-primary text-[15px] font-bold px-9 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 btn-magnetic'
              >
                How It Works
              </button>
            </div>
          </div>

          {/* RIGHT - Dubor Logo */}
          <div
            ref={imageRef}
            className={`relative mt-8 lg:mt-0 ${imageVisible ? 'zoom-in' : 'opacity-0'}`}
          >
            <div className='relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/50 bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-8 sm:p-12 group'>
              <img
                src={logo}
                alt='Dubor Logo'
                className='w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] h-auto object-contain group-hover:scale-105 transition-transform duration-700'
              />

              {/* Bottom Overlay Badge */}
              <div className='absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 w-[92%]'>
                <div className='bg-white/95 backdrop-blur-md px-3 sm:px-5 py-2 sm:py-3 rounded-xl shadow-2xl border border-gray-200'>
                  <p className='text-[11px] sm:text-[13px] tracking-[0.08em] sm:tracking-[0.12em] text-[var(--color-brandBlue)] font-bold uppercase flex items-center justify-center gap-2 font-sans'>
                    <span className='text-center'>
                      Professional Business Assessment
                    </span>
                  </p>
                </div>
              </div>

              {/* Gradient Overlay */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none'></div>
            </div>

            {/* Decorative floating elements - smaller */}
            <div className='absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full blur-2xl opacity-20 animate-pulse hidden sm:block'></div>
            <div className='absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500 rounded-full blur-2xl opacity-15 animate-pulse hidden sm:block'></div>
          </div>
        </div>
      </div>
    </section>
  );
}
