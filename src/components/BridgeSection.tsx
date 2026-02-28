import { ArrowRight } from 'lucide-react';

export default function BridgeSection() {
  return (
    <section className='w-full bg-gradient-to-br from-[#0b1f3a] via-[#0e2a4d] to-[#1e3a5f] py-24'>
      <div
        className='mx-auto px-6'
        style={{ maxWidth: 'var(--container-width)' }}
      >
        <div className='grid md:grid-cols-2 gap-20 items-start'>
          {/* LEFT COLUMN */}
          <div>
            <h2 className='text-[34px] leading-[1.2] font-semibold text-white'>
              Bridging the Gap Between{' '}
              <span className='text-[#3b82f6]'>Western Theory</span> and{' '}
              <span className='text-[#22c55e]'>Nigerian Reality.</span>
            </h2>

            <p className='mt-6 text-[15px] leading-relaxed text-[#cbd5e1] max-w-md'>
              Most hospitality training is generic. It teaches you how things
              should work in a perfect world. We teach you how to make things
              work in the real world.
            </p>

            <p className='mt-5 text-[15px] leading-relaxed text-[#cbd5e1] max-w-md'>
              Our curriculum is built on the specific operational friction
              points of the Nigerian market: power instability, supply chain
              inconsistency, and cultural nuances in staff management.
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div className='relative'>
            <div className='flex items-start gap-6'>
              {/* Accent line */}
              <div className='w-1 h-16 bg-gradient-to-b from-[#3b82f6] to-[#22c55e] mt-2 rounded-full'></div>

              <div>
                <p className='text-[21px] leading-snug text-[#e5e7eb] max-w-md font-medium'>
                  Strong people fail in weak systems. We build the people who
                  can build the systems.
                </p>

                <button className='mt-6 text-[12px] tracking-[0.15em] text-[#3b82f6] font-semibold uppercase flex items-center gap-2 hover:gap-3 transition-all duration-300'>
                  OPEN EDGE PHILOSOPHY
                  <ArrowRight className='w-4 h-4' strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
