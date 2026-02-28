import { consultationIcon, duborLogo, logo } from '@/assets';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Feature {
  id: number;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: 'Fixes Root Operational Issues',
    description:
      'We address core problems, not just surface symptoms, for lasting change.',
  },
  {
    id: 2,
    title: 'Aligns Owners & Middle Management',
    description: 'Creating shared vision and accountability across all levels.',
  },
  {
    id: 3,
    title: 'Develops Operational Leaders',
    description: 'Turning supervisors into managers who take full ownership.',
  },
  {
    id: 4,
    title: 'Accounts for Nigerian Realities',
    description:
      'Staff gaps, human behavior under pressure, and local market conditions.',
  },
  {
    id: 5,
    title: 'Financial Controls & Reporting',
    description: 'Transparent daily reporting that tracks every Naira.',
  },
  {
    id: 6,
    title: 'Guest Experience Protocols',
    description: 'Consistent service standards that bring customers back.',
  },
];

function FeatureItem({ feature }: { feature: Feature }) {
  return (
    <div className='group flex items-start gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-blue-50/50 hover:shadow-sm cursor-pointer border border-transparent hover:border-blue-100'>
      <div className='w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600'>
        <svg
          className='w-3 h-3 text-blue-600 group-hover:text-white transition-colors duration-300'
          fill='none'
          stroke='currentColor'
          strokeWidth='2.5'
          viewBox='0 0 24 24'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M5 13l4 4L19 7'
          />
        </svg>
      </div>

      <div className='flex-1'>
        <p className='text-[13px] font-bold text-[var(--color-heading)] group-hover:text-[var(--color-brandBlue)] transition-colors duration-300 mb-0.5'>
          {feature.title}
        </p>
        <p className='text-[17px] text-[var(--color-muted)] leading-[26px]'>
          {feature.description}
        </p>
      </div>
    </div>
  );
}

export default function SolutionSection() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section ref={sectionRef} className='w-full bg-white py-20'>
      <div className='mx-auto max-w-[1200px] px-6'>
        {/* TOP SECTION: Text Left, Image Right */}
        <div className='grid grid-cols-1 lg:grid-cols-[60%_40%] gap-10 items-center mb-16'>
          {/* LEFT - Text Content */}
          <div className=''>
            <p className='text-[12px] font-bold tracking-widest text-[var(--color-brandBlue)] uppercase mb-3'>
              OUR SOLUTION
            </p>

            <h2 className='text-[32px] md:text-[36px] font-bold text-[var(--color-heading)] mb-5 leading-tight'>
              The Open Edge Operating System
            </h2>

            <p className='text-[18px] leading-[1.7] text-[var(--color-muted)] mb-4'>
              We implement our proprietary Open Edge Operating System in 90
              intense days to setup or fix hospitality businesses serious about
              building wealth from their investments.
            </p>

            <p className='text-[18px] leading-[1.7] text-[var(--color-muted)]'>
              Our solution is a structured framework proven in real Nigerian
              hospitality environments. We don't submit fancy reports—we assess,
              fix, and stabilize the business for profit and growth.
            </p>
          </div>

          {/* RIGHT - Logo */}
          <div className='relative w-full h-[350px] rounded-2xl overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-10'>
            <div className='relative'>
              <div
                className={`relative overflow-hidden border-transparent group hover:shadow-2xl transition-all duration-500   from-blue-50 to-white flex items-center justify-center p-4 logo-glow-container`}
              >
                <div className='logo-glow-middle'></div>

                <img
                  src={logo || ''}
                  alt='Openedge logo'
                  className={
                    'w-[90%] lg:w-full lg:max-w-[600px] h-auto object-contain group-hover:scale-110 transition-transform duration-700 logo-float-animation'
                  }
                />

                {/* Bottom Overlay Badge */}

                <div className='absolute bottom-6 left-1/2 transform -translate-x-1/2 w-[92%]'>
                  <div className='bg-white/95 backdrop-blur-md px-5 py-3 rounded-xl shadow-2xl border border-gray-200'>
                    <p className='text-[13px] tracking-[0.12em] text-[var(--color-brandBlue)] font-bold uppercase flex items-center justify-center gap-2 font-montserrat'></p>
                  </div>
                </div>

                {/* Gradient Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none'></div>
              </div>

              {/* Decorative floating elements - smaller */}
              <div className='absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-full blur-2xl opacity-20 animate-pulse'></div>
              <div className='absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500 rounded-full blur-2xl opacity-15 animate-pulse'></div>
            </div>

            {/* Badge Overlay */}
            <div className='absolute bottom-6 left-1/2 transform -translate-x-1/2 w-[90%]'>
              <div className='bg-white/95 backdrop-blur-md px-5 py-3 rounded-xl shadow-2xl border border-gray-200'>
                <div className='flex items-center gap-3'>
                  <div className='w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0'>
                    <img src={consultationIcon} alt='' className='w-6 h-6' />
                  </div>

                  <div className='text-left'>
                    <p className='text-[12px] font-medium text-[var(--color-brandBlue)] uppercase tracking-wide'>
                      Proven Methodology
                    </p>
                    <h3 className='text-[16px] font-bold text-[var(--color-heading)]'>
                      90 Days Transformation
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Gradient Overlay */}
            <div className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none'></div>
          </div>
        </div>

        {/* BOTTOM SECTION: Feature Points Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <FeatureItem feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
