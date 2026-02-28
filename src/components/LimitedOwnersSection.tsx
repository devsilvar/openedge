import { ShieldCheck } from 'lucide-react';

const LimitedOwnersSection = () => {
  return (
    <section className='relative overflow-hidden bg-gradient-to-br from-[#1f4f82] via-[#2563eb] to-[#1e40af]'>
      <div
        className='mx-auto px-6 py-32'
        style={{ maxWidth: 'var(--container-width)' }}
      >
        {/* Decorative Shield */}
        <div className='absolute right-24 top-16 opacity-10 hidden lg:block'>
          <ShieldCheck
            size={240}
            strokeWidth={1.2}
            className='text-white'
          />
        </div>

        {/* Heading */}
        <h2 className='text-[56px] leading-[1.2] font-bold text-white max-w-4xl'>
          We deliberately work with a{' '}
          <span className='italic text-yellow-300 font-semibold'>small number</span> of serious
          hospitality owners.
        </h2>

        {/* Description */}
        <div className='mt-12 pl-8 border-l-4 border-yellow-300 max-w-2xl'>
          <p className='text-[19px] leading-[1.8] text-blue-50 font-medium'>
            This is high-touch implementation, not a mass-market course. We
            ensure every client we accept achieves the 90-day transformation.
          </p>
        </div>

        {/* Slots */}
        <div className='mt-14 flex items-center gap-6'>
          <div className='flex -space-x-3'>
            <div className='w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-sm font-bold text-[var(--color-primary)] border-4 border-blue-100'>
              OE
            </div>
            <div className='w-14 h-14 rounded-full bg-blue-100 shadow-lg flex items-center justify-center text-sm font-bold text-[var(--color-primary)] border-4 border-blue-200'>
              OE
            </div>
            <div className='w-14 h-14 rounded-full bg-yellow-300 shadow-lg flex items-center justify-center text-sm font-bold text-gray-800 border-4 border-yellow-400'>
              +3
            </div>
          </div>

          <p className='text-[13px] tracking-[0.2em] uppercase text-blue-100 font-semibold'>
            Limited Quarterly Slots Available
          </p>
        </div>
      </div>
    </section>
  );
};

export default LimitedOwnersSection;
