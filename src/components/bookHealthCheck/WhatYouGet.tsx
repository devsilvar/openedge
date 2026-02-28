import { FileText, Target, Lightbulb, TrendingUp } from 'lucide-react';
import osheroImage from '@/assets/images/osheroimg.png';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function WhatYouGet() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const deliverables = [
    {
      icon: FileText,
      number: '1',
      title: 'Written Assessment Report',
      description: 'A full written breakdown of what we found, where you are losing value, and why.',
      color: 'blue' as const,
    },
    {
      icon: Target,
      number: '2',
      title: 'Root Cause Diagnosis',
      description: 'Not just symptoms. We identify the deeper, structural reasons your business is underperforming.',
      color: 'green' as const,
    },
    {
      icon: Lightbulb,
      number: '3',
      title: 'Actionable Recommendations',
      description: 'Specific steps to fix the issues. No vague advice. Clear actions.',
      color: 'purple' as const,
    },
    {
      icon: TrendingUp,
      number: '4',
      title: 'Financial Reality Check',
      description: 'What the numbers actually say. Profit margins, leakages, and cost inefficiencies exposed.',
      color: 'orange' as const,
    },
  ];

  return (
    <section className='bg-white py-12 sm:py-16 md:py-20'>
      <div ref={ref} className='mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          <p className='text-[11px] sm:text-[12px] font-bold tracking-widest text-[var(--color-brandBlue)] uppercase mb-3'>
            THE DELIVERABLE
          </p>
          <h2 className='text-[28px] sm:text-[34px] md:text-[38px] font-bold text-[var(--color-heading)] mb-4'>
            What You Get
          </h2>
          <p className='text-[15px] sm:text-[16px] text-[var(--color-muted)] max-w-2xl mx-auto leading-[1.7]'>
            The Hospitality Health Check is not a fluffy consultation. It's a forensic audit of your business.
          </p>
        </div>

        {/* Image at the top - full width */}
        <div className={`mb-12 sm:mb-16 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border-2 sm:border-4 border-gray-100 ${isVisible ? 'zoom-in' : 'opacity-0'}`}>
          <img 
            src={osheroImage} 
            alt="Professional Business Assessment" 
            className='w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover hover:scale-105 transition-transform duration-700'
          />
        </div>

        {/* 2x2 Grid of deliverables */}
        <div className='grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12'>
          {deliverables.map((item, index) => {
            const Icon = item.icon;
            const colorClasses = {
              blue: 'border-blue-500 bg-blue-50',
              green: 'border-green-500 bg-green-50',
              purple: 'border-purple-500 bg-purple-50',
              orange: 'border-orange-500 bg-orange-50',
            };
            const iconColors = {
              blue: 'text-blue-600',
              green: 'text-green-600',
              purple: 'text-purple-600',
              orange: 'text-orange-600',
            };

            return (
              <div
                key={item.number}
                className={`bg-white rounded-xl p-8 border-2 ${colorClasses[item.color]} shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 card-magnetic ${isVisible ? `stagger-${index + 1}` : 'opacity-0'}`}
              >
                <div className='flex items-start gap-4 mb-4'>
                  <div className={`w-14 h-14 rounded-xl ${colorClasses[item.color]} flex items-center justify-center`}>
                    <Icon className={`w-7 h-7 ${iconColors[item.color]}`} strokeWidth={2} />
                  </div>
                  <span className='text-[32px] font-bold text-gray-200'>
                    {item.number}
                  </span>
                </div>

                <h3 className='text-[18px] font-bold text-[var(--color-heading)] mb-3'>
                  {item.title}
                </h3>

                <p className='text-[17px] text-[var(--color-muted)] leading-[1.7]'>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className='bg-blue-50 border-l-4 border-blue-500 rounded-lg p-6'>
          <p className='text-[15px] text-[var(--color-heading)] font-bold mb-2'>
            This is not a sales pitch.
          </p>
          <p className='text-[17px] text-[var(--color-muted)] leading-[1.7]'>
            We tell you the truth about your business, even if it's uncomfortable. If you're not ready to hear hard truths and act on them, this assessment isn't for you.
          </p>
        </div>
      </div>
    </section>
  );
}
