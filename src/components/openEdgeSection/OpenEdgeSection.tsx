import ConstraintCard from './ConstraintCard';

export default function OpenEdgeSection() {
  return (
    <section className='relative overflow-hidden bg-gradient-to-br from-[#1a2332] to-[#0f1419] py-12 sm:py-16 md:py-20'>
      {/* Decorative grid pattern background */}
      <div className='absolute inset-0 opacity-5'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className='mx-auto max-w-[90%] sm:max-w-[85%] md:max-w-[80%] px-4 sm:px-6 md:px-8 relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start'>
          {/* LEFT SIDE */}
          <div className='pt-4 sm:pt-6'>
            <p className='text-[11px] sm:text-[12px] tracking-[0.2em] sm:tracking-[0.25em] font-bold uppercase mb-4 sm:mb-6 text-blue-400'>
              METHODOLOGY
            </p>

            <h1 className='text-white text-[28px] sm:text-[36px] md:text-[42px] leading-[1.2] sm:leading-[1.1] font-bold mb-4 sm:mb-6'>
              The Open Edge <br /> Operating System
            </h1>

            <p className='text-gray-300 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed max-w-md mb-6 sm:mb-8'>
              We don't just advise; we install an operating system for your business. This is not jargon, and it is not theory. It is a set of proven accountabilities designed for the specific realities of the Nigerian market.
            </p>

            <div className='inline-flex items-center gap-2 sm:gap-3 bg-blue-900/30 border border-blue-500/30 rounded-lg px-4 sm:px-5 py-2.5 sm:py-3 text-[13px] sm:text-[14px] text-blue-200 backdrop-blur-sm'>
              <span className='w-2 sm:w-2.5 h-2 sm:h-2.5 bg-blue-400 rounded-full animate-pulse' />
              Actionable. Measurable. Repeatable.
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className='space-y-4'>
            <ConstraintCard
              title='Local Constraints'
              description='Solutions built for power, logistics, and supply chain realities.'
            />
            <ConstraintCard
              title='Owner Lifestyle'
              description="Designing businesses that serve the owner's life, not consume it."
            />
            <ConstraintCard
              title='Staff Accountability'
              description='Clear KPIs and processes that remove ambiguity from performance.'
            />
            <ConstraintCard
              title='Guest Experience Engineering'
              description="Turning 'good service' into a standardized product."
            />
            <ConstraintCard
              title='Financial Transparency'
              description='Systems that prevent leakage and ensure profitability.'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
