import InfoCard from './InfoCard';
import { UserX, Users, Cog, TrendingDown } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function WhyOpenEdgeSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section className='bg-gray-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6'>
      <div ref={ref} className='max-w-[1200px] mx-auto text-center'>
        <p className={`text-[11px] sm:text-[12px] font-bold tracking-widest text-[var(--color-brandBlue)] uppercase mb-3 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
          The Reality Check
        </p>

        <h2 className='text-[28px] sm:text-[32px] md:text-[34px] font-bold text-[#1f2937] mb-4'>
          Why Open Edge Exists
        </h2>
        
        <p className='text-[15px] sm:text-[17px] md:text-[18px] text-[var(--color-muted)] max-w-2xl mx-auto mb-4 leading-[1.7]'>
          Most hospitality failures are not caused by poor intentions or lack of effort.
        </p>

        <p className='text-[15px] sm:text-[17px] md:text-[18px] text-[var(--color-muted)] max-w-2xl mx-auto mb-12 sm:mb-16 leading-[1.7] font-semibold'>
          They happen because:
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12 sm:mb-16'>
          <InfoCard
            icon={<UserX className='w-7 h-7 text-blue-600' strokeWidth={2} />}
            title='Owners Stay Deeply Involved'
            description='Owners are forced to stay deeply involved in daily operations'
            isVisible={isVisible}
            index={0}
          />

          <InfoCard
            icon={<Users className='w-7 h-7 text-blue-600' strokeWidth={2} />}
            title='Middle Management Lacks Structure'
            description='Middle management lacks structure, accountability, and growth paths'
            isVisible={isVisible}
            index={1}
          />

          <InfoCard
            icon={<Cog className='w-7 h-7 text-blue-600' strokeWidth={2} />}
            title='Weak Systems'
            description='Systems are weak, undocumented, or ignored'
            isVisible={isVisible}
            index={2}
          />

          <InfoCard
            icon={<TrendingDown className='w-7 h-7 text-blue-600' strokeWidth={2} />}
            title='Pressure Decisions'
            description='Decisions are made under pressure, without visibility'
            isVisible={isVisible}
            index={3}
          />
        </div>

        <div className='bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-5 sm:p-6 max-w-3xl mx-auto'>
          <p className='text-[14px] sm:text-[15px] text-[#374151] leading-[1.8] font-medium mb-3'>
            The result is a business that survives but cannot scale, stabilize, or endure.
          </p>
          <p className='italic text-[14px] sm:text-[15px] text-[#374151] leading-[1.8] font-semibold'>
            Open Edge was created to address this gap practically, not theoretically.
          </p>
        </div>
      </div>
    </section>
  );
}
