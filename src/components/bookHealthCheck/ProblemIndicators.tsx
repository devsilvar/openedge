import { DollarSign, FileQuestion, Clock, Users, TrendingDown, Shield, AlertTriangle, Target } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ProblemIndicators() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const warnings = [
    {
      icon: DollarSign,
      title: 'Revenue is flat or declining',
      description: "Despite working harder, your business isn't growing.",
    },
    {
      icon: FileQuestion,
      title: "You don't know your actual profit",
      description: "Revenue looks good, but you're not sure what's left after costs.",
    },
    {
      icon: Clock,
      title: "You can't step away",
      description: 'Everything depends on you. The business stops when you stop.',
    },
    {
      icon: Users,
      title: 'Staff turnover is high',
      description: "People leave. You're constantly hiring and retraining.",
    },
    {
      icon: TrendingDown,
      title: 'Costs keep rising',
      description: 'Diesel, food, wages - everything costs more. Margins shrink.',
    },
    {
      icon: Shield,
      title: 'Systems are ignored',
      description: 'You have SOPs on paper. No one follows them.',
    },
    {
      icon: AlertTriangle,
      title: 'You suspect theft or waste',
      description: "Something feels wrong. You just can't prove it.",
    },
    {
      icon: Target,
      title: 'You feel stuck',
      description: "You're working hard but not building anything transferable.",
    },
  ];

  return (
    <section className='relative bg-white py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden'>
      {/* Subtle decorative elements */}
      <div className='absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-red-50 rounded-full blur-3xl opacity-30 breathe'></div>
      
      <div ref={ref} className='mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Header */}
        <div className={`max-w-3xl mb-12 sm:mb-16 md:mb-20 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <p className='text-[10px] sm:text-[11px] font-bold tracking-[0.15em] sm:tracking-[0.2em] text-red-600 uppercase mb-3 sm:mb-4 flex items-center gap-2'>
            <span className='w-6 sm:w-8 h-px bg-red-600'></span>
            WARNING SIGNS
          </p>
          <h2 className='text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-bold text-[var(--color-heading)] mb-4 sm:mb-5 leading-[1.2]'>
            When Should You Book a<br className='hidden sm:block' /><span className='sm:hidden'> </span>Health Check?
          </h2>
          <p className='text-[15px] sm:text-[16px] text-[var(--color-muted)] leading-[1.7]'>
            If any of these sound familiar, your business needs urgent attention.
          </p>
        </div>

        {/* Warning Grid - Asymmetric, spacious layout */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-10 md:gap-x-16 gap-y-8 sm:gap-y-10 md:gap-y-12 max-w-5xl'>
          {warnings.map((warning, index) => {
            const Icon = warning.icon;
            return (
              <div
                key={warning.title}
                className={`group flex gap-5 items-start ${isVisible ? `stagger-${index + 1}` : 'opacity-0'}`}
              >
                {/* Number + Icon */}
                <div className='flex-shrink-0'>
                  <div className='relative'>
                    <div className='absolute -top-2 -left-2 text-[40px] font-bold text-red-100 leading-none'>
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className='relative w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-all duration-300 group-hover:scale-110'>
                      <Icon className='w-6 h-6 text-red-600' strokeWidth={2} />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className='flex-1 pt-1'>
                  <h3 className='text-[17px] font-bold text-[var(--color-heading)] mb-2 group-hover:text-red-600 transition-colors duration-300'>
                    {warning.title}
                  </h3>
                  <p className='text-[17px] text-[var(--color-muted)] leading-[1.7]'>
                    {warning.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className='mt-20 max-w-2xl'>
          <div className='bg-red-50 border-l-4 border-red-600 rounded-r-xl p-8'>
            <p className='text-[15px] text-[var(--color-heading)] font-semibold mb-2'>
              The longer you wait, the more value you lose.
            </p>
            <p className='text-[17px] text-[var(--color-muted)]'>
              Every day without clarity costs you money, time, and peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
