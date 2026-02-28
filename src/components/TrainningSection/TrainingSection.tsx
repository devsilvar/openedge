import TrainingCard from './TrainingCard';
import { Zap, MonitorPlay } from 'lucide-react';

const TrainingSection = () => {
  return (
    <section className='bg-gray-50 py-20'>
      <div className='max-w-container mx-auto px-6'>
        {/* Header */}
        <div className='text-center mb-14 max-w-3xl mx-auto'>
          <p className='text-[12px] font-bold tracking-widest text-[var(--color-brandBlue)] uppercase mb-3'>
            TRAINING FORMAT
          </p>
          <h2 className='text-[32px] font-bold text-[var(--color-heading)] mb-4'>
            Why Open Edge Training Is Different
          </h2>
          <p className='text-[18px] text-[var(--color-muted)] leading-[1.7] mb-4'>
            Most hospitality trainings focus on theory.
          </p>
          <p className='text-[18px] text-[var(--color-muted)] leading-[1.7] font-semibold'>
            Open Edge focuses on how businesses actually operate in Nigeria.
          </p>
          <p className='text-[18px] text-[var(--color-muted)] leading-[1.7] mt-6 italic'>
            Strong people fail in weak systems. We train you to operate within strong ones.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[80%] mx-auto'>
          <TrainingCard
            title='Intensive Physical Training'
            description='Practical, focused, no distractions. This is hands-on and demanding. Attendance and participation matter.'
            accentColor='#DC2626'
            accentSoftColor='rgba(220,38,38,0.12)'
            label='Practical Focus'
            icon={
              <Zap
                className='w-7 h-7 text-[#DC2626]'
                strokeWidth={2.5}
                fill='#DC2626'
              />
            }
          />

          <TrainingCard
            title='20 Hours Online'
            description='Operational thinking, leadership, controls. This is hands-on and demanding. Attendance and participation matter.'
            accentColor='#2563EB'
            accentSoftColor='rgba(37,99,235,0.12)'
            label='Operational Focus'
            icon={
              <MonitorPlay
                className='w-7 h-7 text-[#2563EB]'
                strokeWidth={2.5}
              />
            }
          />
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
