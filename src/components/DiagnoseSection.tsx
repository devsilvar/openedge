import {
  ClipboardCheck,
  BarChart3,
  Building2,
  type LucideIcon,
} from 'lucide-react';

type DiagnoseCardType = 'qualification' | 'review' | 'assessment';

const iconMap: Record<DiagnoseCardType, LucideIcon> = {
  qualification: ClipboardCheck,
  review: BarChart3,
  assessment: Building2,
};

interface DiagnoseCardProps {
  type: DiagnoseCardType;
  step: string;
  title: string;
  description: string;
}

function DiagnoseCard({ type, step, title, description }: DiagnoseCardProps) {
  const Icon = iconMap[type];

  return (
    <div className='group bg-white rounded-xl px-7 py-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1'>
      <div className='flex justify-center mb-5'>
        <div className='w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300 group-hover:scale-110'>
          <Icon
            className='w-7 h-7 text-[var(--color-brandBlue)]'
            strokeWidth={2}
          />
        </div>
      </div>

      <p className='text-[15px] text-[var(--color-heading)] font-bold mb-3'>
        {step}. {title}
      </p>

      <p className='text-[17px] text-[var(--color-muted)] leading-[22px]'>{description}</p>
    </div>
  );
}

export default function DiagnoseSection() {
  return (
    <section className='bg-white py-20 relative'>
      {/* Decorative top wave */}
      <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent'></div>
      
      <div className='mx-auto max-w-[1200px] px-6 text-center'>
        <p className='text-[12px] font-bold tracking-widest text-[var(--color-brandBlue)] uppercase mb-3'>
          HOW IT WORKS
        </p>

        <h2 className='text-[32px] md:text-[36px] font-bold text-[var(--color-heading)] mb-4'>
          Diagnose Your Business Health
        </h2>

        <p className='text-[18px] text-[var(--color-muted)] max-w-2xl mx-auto mb-12 leading-[1.7]'>
          Transform your hospitality experience with a professional evaluation.
          Our expert team identifies leakages and optimizes your operational
          flow.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <DiagnoseCard
            type='qualification'
            step='1'
            title='Qualification'
            description='Initial compatibility assessment'
          />

          <DiagnoseCard
            type='review'
            step='2'
            title='Data Review'
            description='Deep dive into operations'
          />

          <DiagnoseCard
            type='assessment'
            step='3'
            title='Physical Assessment'
            description='On-site facility inspection'
          />
        </div>
      </div>
    </section>
  );
}
