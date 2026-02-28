interface StepProps {
  num: string;
  title: string;
  desc: string;
  active?: boolean;
  isVisible?: boolean;
  index?: number;
}

function Step({ num, title, desc, active, isVisible, index }: StepProps) {
  return (
    <div className={`group relative bg-white rounded-xl px-5 sm:px-6 md:px-8 py-5 sm:py-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 card-magnetic ${isVisible ? `stagger-${(index || 0) + 1}` : 'opacity-0'}`}>
      {/* Accent Bar */}
      {active && (
        <div className='absolute top-0 left-0 w-full h-1 bg-[var(--color-brandBlue)] rounded-t-xl' />
      )}

      <div className='flex items-start gap-3 sm:gap-4'>
        {/* Number */}
        <div className='text-[28px] sm:text-[32px] md:text-[36px] font-bold text-gray-200 group-hover:text-blue-100 transition-colors duration-300 leading-none flex-shrink-0'>
          {num}
        </div>

        <div className='flex-1'>
          {/* Title */}
          <div className='text-[14px] sm:text-[15px] md:text-[16px] font-bold text-[var(--color-heading)] mb-2'>
            {title}
          </div>

          {/* Description */}
          <p className='text-[12px] sm:text-[13px] leading-[1.6] text-[var(--color-muted)]'>
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function TrustSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section className='bg-gray-50 py-12 sm:py-16 md:py-20'>
      <div ref={ref} className='max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <p className='text-[11px] sm:text-[12px] font-bold tracking-widest text-[var(--color-brandBlue)] uppercase mb-3'>
            OUR PROCESS
          </p>
          <h2 className='text-[28px] sm:text-[32px] md:text-[34px] font-bold text-[var(--color-heading)] mb-4'>
            Why Clients Trust Us
          </h2>
          <p className='text-[15px] sm:text-[17px] md:text-[18px] text-[var(--color-muted)] max-w-2xl mx-auto'>
            Early clients didn't come to Open Edge because we were loud. They came because we were clear, structured, and accountable. Here's what consistently earns their trust:
          </p>
        </div>

        {/* Grid - Fatter and shorter boxes */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto mb-12'>
          <Step
            num='01'
            title='We start with assessment, not assumptions'
            desc='This prevents expensive guesswork and ensures every intervention is deliberate and relevant.'
            active
            isVisible={isVisible}
            index={0}
          />
          <Step
            num='02'
            title='We work inside the business, not around it'
            desc='We sit with owners, management, and staff to understand how work actually gets done, then redesign what is broken.'
            isVisible={isVisible}
            index={1}
          />
          <Step
            num='03'
            title='We focus on root causes, not symptoms'
            desc='Most hospitality problems show up as poor staff performance, revenue leakage, and owner exhaustion, but we trace these back to system and middle-management failures, where lasting change actually happens.'
            active
            isVisible={isVisible}
            index={2}
          />
          <Step
            num='04'
            title="We respect the owner's reality"
            desc='Nothing we recommend requires a "perfect team" or unrealistic discipline.'
            isVisible={isVisible}
            index={3}
          />
          <Step
            num='05'
            title='We are selective and stay accountable'
            desc='We work with a limited number of businesses at a time so we can stay involved, measure progress and be accountable to outcomes'
            active
            isVisible={isVisible}
            index={4}
          />
        </div>

        {/* Closing Statement */}
        <div className='max-w-3xl mx-auto text-center'>
          <p className='text-[15px] sm:text-[17px] md:text-[18px] text-[var(--color-muted)] leading-[1.7] font-medium'>
            Clients trust us because we don't disappear after recommendations. We stay until systems are built.
          </p>
        </div>
      </div>
    </section>
  );
}
