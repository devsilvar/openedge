import { Send, FileSearch, ClipboardCheck, FileText } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ProcessTimeline() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const steps = [
    {
      number: '01',
      title: 'You Submit the Form',
      duration: 'Within 48 hours',
      description:
        'Fill out the Health Check request form. We review it and respond within 48 hours to confirm eligibility.',
      icon: Send,
    },
    {
      number: '02',
      title: 'We Review Your Submission',
      duration: '1-2 business days',
      description:
        "Our team assesses your business profile to ensure we can deliver real value. Not every business is a fit, and we're upfront about that.",
      icon: FileSearch,
    },
    {
      number: '03',
      title: 'We Conduct the Assessment',
      duration: '3-5 days on-site',
      description:
        'Era and the Open Edge team visit your business, audit operations, interview key staff, and review financial records.',
      icon: ClipboardCheck,
    },
    {
      number: '04',
      title: 'You Receive the Report',
      duration: 'Within 7 days',
      description:
        'You receive a detailed written report with root cause diagnosis, financial leakage analysis, and clear next steps.',
      icon: FileText,
    },
  ];

  return (
    <section id='how-it-works' className='bg-gray-50 py-12 sm:py-16 md:py-20'>
      <div ref={ref} className='max-w-[1200px] mx-auto px-4 sm:px-6'>
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <p className='text-[11px] sm:text-[12px] font-bold tracking-widest text-[var(--color-brandBlue)] uppercase mb-3'>
            HOW IT WORKS
          </p>
          <h2 className='text-[28px] sm:text-[34px] font-bold text-[var(--color-heading)] mb-4'>
            The Process
          </h2>
          <p className='text-[16px] sm:text-[18px] text-[var(--color-muted)] max-w-2xl mx-auto'>
            Simple, structured, and results-focused.
          </p>
        </div>

        {/* Timeline */}
        <div className='max-w-4xl mx-auto space-y-8 sm:space-y-12 relative'>
          {/* Connecting Line */}
          <div className='absolute left-6 sm:left-12 top-16 bottom-16 w-0.5 bg-blue-200 hidden md:block' />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className={`relative group ${isVisible ? `stagger-${index + 1}` : 'opacity-0'}`}>
                <div className='flex items-start gap-3 sm:gap-6 md:gap-8'>
                  {/* Step Number */}
                  <div className='flex-shrink-0 w-12 sm:w-16 md:w-24 text-right'>
                    <div className='text-[32px] sm:text-[40px] md:text-[48px] font-bold text-gray-200 group-hover:text-transparent group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-blue-700 group-hover:bg-clip-text transition-all duration-300'>
                      {step.number}
                    </div>
                  </div>

                  {/* Step Card */}
                  <div className='flex-1 bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100'>
                    <div className='flex items-start gap-3 sm:gap-4'>
                      {/* Icon */}
                      <div className='flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                        <Icon
                          className='w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-brandBlue)]'
                          strokeWidth={2}
                        />
                      </div>

                      {/* Content */}
                      <div className='flex-1'>
                        <div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3'>
                          <h3 className='text-[16px] sm:text-[18px] font-bold text-[var(--color-heading)]'>
                            {step.title}
                          </h3>
                          <span className='px-3 py-1 bg-blue-50 text-[var(--color-brandBlue)] text-[10px] sm:text-[11px] font-bold rounded-full w-fit'>
                            {step.duration}
                          </span>
                        </div>
                        <p className='text-[14px] sm:text-[16px] md:text-[17px] text-[var(--color-muted)] leading-[1.7]'>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
