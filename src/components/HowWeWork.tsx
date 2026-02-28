import React from 'react';
import { Search, Wrench, GraduationCap, TrendingUp } from 'lucide-react';

const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='bg-white py-32'>
      <div
        className='mx-auto px-6'
        style={{ maxWidth: 'var(--container-big)' }}
      >
        {children}
      </div>
    </section>
  );
};

const iconMap: Record<string, any> = {
  '01': Search,
  '02': Wrench,
  '03': GraduationCap,
  '04': TrendingUp,
};

const ProcessStep = ({
  number,
  title,
  subtitle,
  description,
  isLast,
}: {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  isLast: boolean;
}) => {
  const Icon = iconMap[number];
  
  return (
    <div className='relative flex flex-col items-center text-center flex-1'>
      {/* Connector Line - positioned to connect between circles */}
      {!isLast && (
        <div className='hidden md:block absolute top-12 left-full w-[calc(100%+3rem)] h-0.5 bg-gradient-to-r from-[var(--color-primary)] to-blue-300 z-0 opacity-40' />
      )}

      {/* Circle - white with shadow, blue border, icon */}
      <div className='relative z-10 flex flex-col items-center justify-center w-24 h-24 rounded-full border-3 border-[var(--color-primary)] bg-white shadow-xl group-hover:shadow-2xl transition-all duration-300'>
        {Icon && <Icon className='w-8 h-8 text-[var(--color-primary)] mb-1' strokeWidth={2.5} />}
        <span className='text-[13px] font-bold text-[var(--color-primary)] tracking-wider'>{number}</span>
      </div>

      {/* Content - Box below circle */}
      <div className='mt-8 w-full max-w-[300px] bg-white rounded-2xl shadow-lg border border-gray-100 p-7 hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 group'>
        <h3 className='text-[18px] font-bold tracking-widest text-[var(--color-heading)]'>
          {title}
        </h3>

        <p className='mt-3 text-[11px] tracking-[0.2em] font-semibold text-[var(--color-primary)] uppercase'>
          {subtitle}
        </p>

        <p className='mt-5 text-[14px] leading-[22px] text-[var(--color-muted)]'>
          {description}
        </p>
      </div>
    </div>
  );
};

const steps = [
  {
    number: '01',
    title: 'ASSESS',
    subtitle: 'THE BUSINESS PROPERLY',
    description:
      'Through the Hospitality Health Check.',
  },
  {
    number: '02',
    title: 'FIX',
    subtitle: 'BROKEN SYSTEMS',
    description:
      'So people can actually perform.',
  },
  {
    number: '03',
    title: 'TRAIN',
    subtitle: 'CRITICAL OPERATIONAL LEADERS',
    description:
      'Not entry-level staff.',
  },
  {
    number: '04',
    title: 'STABILIZE',
    subtitle: 'THE BUSINESS',
    description:
      'So it can run without constant owner intervention.',
  },
];

const HowWeWork = () => {
  return (
    <SectionWrapper>
      <div className='text-center'>
        <p className='text-xs tracking-[0.3em] font-semibold text-[var(--color-primary)] uppercase'>
          HOW WE WORK
        </p>

        <h2 className='mt-4 text-4xl font-bold text-[var(--color-heading)]'>
          How We Work
        </h2>

        <p className='mt-6 text-lg text-[var(--color-muted)] max-w-2xl mx-auto'>
          Even the best talent can't fix a weak system. That's why we start by assessing your business then apply the solution it truly needs, whether that is operations, leadership, or both.
        </p>
      </div>

      <div className='mt-20 w-full max-w-[95%] mx-auto flex flex-col md:flex-row md:items-start justify-between gap-12 relative'>
        {steps.map((step, index) => (
          <ProcessStep
            key={step.number}
            number={step.number}
            title={step.title}
            subtitle={step.subtitle}
            description={step.description}
            isLast={index === steps.length - 1}
          />
        ))}
      </div>

      {/* Closing Statement */}
      <div className='mt-16 text-center max-w-3xl mx-auto'>
        <p className='text-[18px] text-[var(--color-muted)] leading-[1.7]'>
          We deliberately work with a small number of serious hospitality owners at a time who value results over fancy reports.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default HowWeWork;
