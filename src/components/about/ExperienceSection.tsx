import { Award, Users, Cog } from 'lucide-react';
import { eraIyayiPortrait } from '@/assets';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ExperienceSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section className='py-12 sm:py-16 md:py-20 bg-white'>
      <div ref={ref} className='max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-[1fr_1.2fr] lg:grid-cols-[420px_1fr] gap-8 sm:gap-12 md:gap-16 items-start'>
        {/* Image */}
        <div className={`w-full ${isVisible ? 'slide-in-left' : 'opacity-0'}`}>
          <img
            src={eraIyayiPortrait}
            alt='Era Iyayi - Leader portrait'
            className='w-full rounded-xl object-cover shadow-md hover:shadow-xl transition-all duration-500 hover:scale-105'
          />
        </div>

        {/* Content */}
        <div className={isVisible ? 'slide-in-right' : 'opacity-0'}>
          <p className='text-[11px] sm:text-[12px] tracking-widest font-bold text-[var(--color-brandBlue)] uppercase mb-3'>
            OUR EXPERIENCE
          </p>

          <h2 className='text-[28px] sm:text-[32px] md:text-[34px] leading-tight font-bold text-[var(--color-heading)] mb-4 sm:mb-5'>
            Led by Era Iyayi
          </h2>

          <p className='text-[15px] sm:text-[17px] md:text-[18px] text-[var(--color-muted)] leading-relaxed mb-4'>
            Open Edge began operations in October 2025.
          </p>

          <p className='text-[15px] sm:text-[17px] md:text-[18px] text-[var(--color-muted)] leading-relaxed mb-4'>
            Since then, we have worked closely with a few hospitality businesses to stabilize operations, align middle management, and introduce systems that owners can rely on.
          </p>

          <p className='text-[15px] sm:text-[17px] md:text-[18px] text-[var(--color-muted)] leading-relaxed mb-8 sm:mb-10'>
            While we are deliberate about growing slowly, our early clients chose Open Edge for one reason: we work inside the business, address root issues, and stay accountable to results. We are intentionally selective and work only with a small number of serious hospitality owners at a time.
          </p>

          <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6'>
            <Metric icon={<Award className='w-6 h-6' />} title='Operations' subtitle='EXCELLENCE' isVisible={isVisible} delay={1} />
            <Metric icon={<Users className='w-6 h-6' />} title='Consulting' subtitle='STRATEGY' isVisible={isVisible} delay={2} />
            <Metric icon={<Cog className='w-6 h-6' />} title='Systems' subtitle='ENGINEERING' isVisible={isVisible} delay={3} />
          </div>
        </div>
      </div>
    </section>
  );
}

interface MetricProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  isVisible: boolean;
  delay: number;
}

function Metric({ icon, title, subtitle, isVisible, delay }: MetricProps) {
  return (
    <div className={`group bg-white border border-gray-200 rounded-xl py-4 sm:py-6 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 card-magnetic ${isVisible ? `stagger-${delay}` : 'opacity-0'}`}>
      <div className='flex justify-center mb-2 sm:mb-3 text-[var(--color-brandBlue)] group-hover:scale-110 transition-transform duration-300'>
        {icon}
      </div>
      <div className='text-[13px] sm:text-[15px] font-bold text-[var(--color-heading)] mb-1'>
        {title}
      </div>
      <div className='text-[10px] sm:text-[11px] tracking-widest text-[var(--color-muted)] font-semibold'>
        {subtitle}
      </div>
    </div>
  );
}
