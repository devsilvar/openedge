import { ArrowRight } from 'lucide-react';
import osheroImage from '@/assets/images/osheroimg.png';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function FinalCTA() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section className='py-12 sm:py-16 md:py-20 bg-white'>
      <div ref={ref} className='max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8'>
        
        {/* Top Row - Image + CTA */}
        <div className='grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center mb-12 sm:mb-16'>
          {/* Left - Image */}
          <div className={`order-2 md:order-1 ${isVisible ? 'slide-in-left' : 'opacity-0'}`}>
            <div className='rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl'>
              <img 
                src={osheroImage} 
                alt="Ready to Transform Your Business" 
                className='w-full h-[250px] sm:h-[320px] md:h-[420px] object-cover hover:scale-105 transition-transform duration-700'
              />
            </div>
          </div>

          {/* Right - CTA Content */}
          <div className={`order-1 md:order-2 ${isVisible ? 'slide-in-right' : 'opacity-0'}`}>
            <p className='text-[11px] sm:text-[12px] tracking-widest font-bold text-[var(--color-brandBlue)] uppercase mb-3'>
              TAKE ACTION
            </p>

            <h2 className='text-[26px] sm:text-[32px] md:text-[38px] leading-tight font-bold text-[var(--color-heading)] mb-4 sm:mb-5'>
              Ready to See the Truth About Your Business?
            </h2>

            <p className='text-[15px] sm:text-[17px] md:text-[18px] text-[var(--color-muted)] leading-relaxed mb-3 sm:mb-4'>
              The Hospitality Health Check is not a sales pitch. It's a forensic audit that tells you exactly where your business is bleeding value.
            </p>

            <p className='text-[15px] sm:text-[17px] md:text-[18px] text-[var(--color-muted)] leading-relaxed mb-6 sm:mb-8 md:mb-10'>
              If you're ready for the truth, book your assessment now.
            </p>

            <a href='/health-check-form' className='inline-block w-full sm:w-auto'>
              <button className='w-full sm:w-auto bg-primary hover:bg-primary-dark text-white text-[14px] sm:text-[15px] font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2 btn-magnetic glow-pulse'>
                Proceed to Application Form
                <ArrowRight className='w-5 h-5' strokeWidth={2.5} />
              </button>
            </a>
          </div>
        </div>

        {/* Bottom Row - Dark Gradient Card (full width, centered) */}
        <div className='max-w-2xl mx-auto'>
          <div className='bg-gradient-to-br from-[#0f172a] to-[#020617] rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 text-white relative overflow-hidden shadow-2xl'>
            <h3 className='text-[20px] sm:text-[22px] md:text-[24px] font-bold mb-4 sm:mb-5'>What Happens Next?</h3>

            <p className='text-[14px] sm:text-[15px] leading-[1.7] text-gray-300 mb-5 sm:mb-6'>
              Once you submit the form, we review your business profile within 48 hours. If we believe we can help, we'll reach out to schedule the assessment.
            </p>

            <div className='border-t border-gray-700 pt-5 sm:pt-6'>
              <div className='text-[10px] sm:text-[11px] tracking-widest text-gray-400 mb-2 font-bold'>
                LIMITED AVAILABILITY
              </div>

              <div className='text-[14px] sm:text-[16px] font-bold'>
                We work with a small number of serious owners at a time.
              </div>
            </div>

            {/* Decorative element */}
            <div className='absolute -bottom-12 -right-12 w-40 h-40 bg-blue-500 rounded-full blur-3xl opacity-10'></div>
          </div>
        </div>

      </div>
    </section>
  );
}
