import StepItem from './StepItem';
import { CheckCircle } from 'lucide-react';

const SelectionSection = () => {
  return (
    <section className='bg-gray-50 py-20'>
      <div className='max-w-[1100px] mx-auto px-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-start'>
          {/* Left Side */}
          <div>
            <h2 className='text-[26px] font-semibold text-[var(--color-heading)] mb-12'>
              How Selection Works
            </h2>

            <div className='space-y-10'>
              <StepItem
                step='1'
                title='Register'
                description='Fill out the detailed application form. Be honest about your experience and motivations.'
              />

              <StepItem
                step='2'
                title='Review'
                description='Our faculty reviews every application. We look for patterns of commitment and resilience.'
              />

              <StepItem
                step='3'
                title='Contact'
                description='Selected candidates will be invited for an interview. If successful, onboarding begins immediately.'
                active
              />
            </div>
          </div>

          {/* Right Side Card */}
          <div className='bg-white rounded-2xl shadow-xl p-8 relative border border-gray-100'>
            {/* Top Accent Line */}
            <div className='absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-primary)] to-blue-400 rounded-t-2xl' />

            <h3 className='text-[18px] font-semibold text-[var(--color-heading)] mb-5'>
              Why We Are Selective
            </h3>

            <p className='text-[14px] leading-[22px] text-[var(--color-muted)] mb-4'>
              We invest heavily in each trainee, and our employer network expects high-calibre graduates.
            </p>

            <p className='text-[14px] leading-[22px] text-[var(--color-muted)] mb-6'>
              We are not trying to scale quickly. We are building a small, elite pool of operational leaders who can genuinely manage hospitality businesses.
            </p>

            <div className='flex items-center gap-2 text-[13px] font-semibold text-[var(--color-primary)] tracking-[0.5px] bg-blue-50 px-4 py-3 rounded-xl'>
              <CheckCircle className='w-5 h-5' strokeWidth={2.5} />
              100% VETTED CANDIDATES ONLY
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectionSection;
