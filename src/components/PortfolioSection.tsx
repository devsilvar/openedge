import { ArrowRight, MapPin } from 'lucide-react';
import { duborLogo } from '@/assets';

export default function PortfolioSection() {
  const projects = [
    {
      category: 'Operational Stability',
      title: 'Dubor Residence',
      location: 'Ibadan',
      description: 'Open Edge worked closely with ownership to set up operations, establish systems, hire operation leaders, and put controls in place so the business could run calmly, predictably, and with less direct owner involvement.',
      image: duborLogo,
      isLogo: true,
    },
    {
      category: 'Multi-Brand Systems Alignment',
      title: 'Port Solis',
      location: 'Ikeja GRA',
      description: 'Open Edge supported Port Solis in aligning systems and middle management across multiple brands to bring structure and operational discipline to a new hospitality complex.',
      subtext: '(Covering Solis Bistro, Seven Notts, and other in-house brands)',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop',
      isLogo: false,
    },
  ];

  return (
    <section className='w-full bg-gray-50 py-28'>
      <div
        className='mx-auto px-6'
        style={{ maxWidth: 'var(--container-width)' }}
      >
        {/* Header */}
        <div className='flex items-end flex-wrap justify-between mb-12'>
          <div>
            <p className='text-[13px] font-bold uppercase tracking-widest text-[var(--color-brandBlue)] mb-3'>
              PORTFOLIO
            </p>

            <h2 className='text-[36px] font-bold text-[var(--color-heading)]'>
              Recent Projects
            </h2>
          </div>

          <a
            href='#'
            className='group flex items-center gap-2 text-[14px] font-semibold text-[var(--color-brandBlue)] hover:text-blue-700 transition-colors duration-300'
          >
            View all projects
            <ArrowRight size={18} strokeWidth={2.5} className='group-hover:translate-x-1 transition-transform duration-300' />
          </a>
        </div>

        {/* Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-white border border-gray-200 card-magnetic tilt-3d'
            >
              {/* Image Section */}
              <div className={`relative h-[280px] overflow-hidden ${project.isLogo ? 'bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-10' : ''}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={project.isLogo 
                    ? 'w-[60%] h-auto object-contain group-hover:scale-105 transition-transform duration-500'
                    : 'w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                  }
                />
                {!project.isLogo && (
                  <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent'></div>
                )}
              </div>

              {/* Content Section */}
              <div className='p-7 bg-white'>
                <p className='text-[13px] text-blue-600 font-semibold mb-2 uppercase tracking-wide'>
                  {project.category}
                </p>

                <h3 className='text-[24px] font-bold mb-2 text-[var(--color-heading)] group-hover:text-[var(--color-brandBlue)] transition-colors duration-300'>
                  {project.title}
                </h3>

                <div className='flex items-center gap-2 text-[17px] text-[var(--color-muted)] mb-3'>
                  <MapPin size={16} strokeWidth={2} />
                  {project.location}
                </div>

                {project.subtext && (
                  <p className='text-[13px] text-[var(--color-muted)] italic mb-3'>
                    {project.subtext}
                  </p>
                )}

                <p className='text-[17px] text-[var(--color-muted)] leading-relaxed'>
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
