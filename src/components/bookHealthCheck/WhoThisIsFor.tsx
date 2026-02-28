import { Check, X } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function WhoThisIsFor() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section className='bg-white py-20'>
      <div ref={ref} className='max-w-[1200px] mx-auto px-6'>
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <p className='text-[12px] font-bold tracking-widest text-[var(--color-brandBlue)] uppercase mb-3'>
            BE HONEST
          </p>
          <h2 className='text-[34px] font-bold text-[var(--color-heading)] mb-4'>
            Who This Is For
          </h2>
          <p className='text-[18px] text-[var(--color-muted)] max-w-2xl mx-auto'>
            The Hospitality Health Check is for serious owners who want the
            truth, not reassurance.
          </p>
        </div>

        {/* Two Column Grid */}
        <div className='grid md:grid-cols-2 gap-8'>
          {/* This IS for you */}
          <div className={`bg-green-50 rounded-2xl p-8 border-2 border-green-200 card-magnetic hover:border-green-400 transition-all duration-300 ${isVisible ? 'stagger-1' : 'opacity-0'}`}>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-12 h-12 rounded-full bg-green-500 flex items-center justify-center glow-effect'>
                <Check className='w-7 h-7 text-white' strokeWidth={3} />
              </div>
              <h3 className='text-[20px] font-bold text-green-900'>
                This IS for you if:
              </h3>
            </div>

            <ul className='space-y-4'>
              {[
                'You own or manage a hospitality business (hotel, short-let, restaurant, event centre, resort)',
                "You suspect value is leaking but can't pinpoint where",
                "You're tired of firefighting and want structural solutions",
                "You're ready to hear hard truths, even if uncomfortable",
                "You're willing to invest in fixing the real problems",
              ].map((item, index) => (
                <li key={index} className='flex items-start gap-3'>
                  <Check
                    className='w-5 h-5 text-green-600 mt-0.5 flex-shrink-0'
                    strokeWidth={2.5}
                  />
                  <span className='text-[14px] text-green-900 leading-[1.7]'>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* This is NOT for you */}
          <div className={`bg-red-50 rounded-2xl p-8 border-2 border-red-200 card-magnetic hover:border-red-400 transition-all duration-300 ${isVisible ? 'stagger-2' : 'opacity-0'}`}>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-12 h-12 rounded-full bg-red-500 flex items-center justify-center'>
                <X className='w-7 h-7 text-white' strokeWidth={3} />
              </div>
              <h3 className='text-[20px] font-bold text-red-900'>
                This is NOT for you if:
              </h3>
            </div>

            <ul className='space-y-4'>
              {[
                'You want quick fixes or motivational talk',
                "You're looking for free advice with no commitment",
                "You're not prepared to act on the findings",
                'You just want validation that everything is fine',
                "You're not the decision-maker or owner",
              ].map((item, index) => (
                <li key={index} className='flex items-start gap-3'>
                  <X
                    className='w-5 h-5 text-red-600 mt-0.5 flex-shrink-0'
                    strokeWidth={2.5}
                  />
                  <span className='text-[14px] text-red-900 leading-[1.7]'>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Note */}
        <div className='mt-12 text-center'>
          <p className='text-[17px] text-[var(--color-muted)] italic max-w-2xl mx-auto'>
            We are deliberately selective. If you're not ready for the truth,
            this assessment will feel confrontational.
          </p>
        </div>
      </div>
    </section>
  );
}
