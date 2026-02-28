import {
  Building2,
  BedDouble,
  CalendarDays,
  Utensils,
  Waves,
} from 'lucide-react';

export default function WhoWeServeSection() {
  const services = [
    { label: 'Hotels', icon: Building2 },
    { label: 'Short-let and serviced apartment businesses', icon: BedDouble },
    { label: 'Event centres', icon: CalendarDays },
    { label: 'Restaurants', icon: Utensils },
    { label: 'Resorts, beach houses, and wellness businesses', icon: Waves },
  ];

  return (
    <section className='w-full bg-gradient-to-br from-[#0b1d3a] via-[#1f4f82] to-[#2563eb] py-20'>
      <div className='mx-auto max-w-[1200px] px-6 text-center'>
        <p className='text-[12px] font-bold tracking-widest text-blue-300 uppercase mb-3'>
          OUR EXPERTISE
        </p>

        <h3 className='text-[32px] md:text-[36px] font-bold text-white mb-12'>
          Who We Work With
        </h3>

        <div className='flex flex-wrap justify-center items-center gap-5'>
          {services.map(({ label, icon: Icon }, index) => (
            <div
              key={index}
              className='group flex flex-col items-center w-[280px]  bg-white  rounded-lg p-5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-white/20 cursor-pointer hover:backdrop-blur-sm hover:bg-white/95 card-magnetic scale-in'
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className='w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-3 group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300'>
                <Icon
                  size={34}
                  strokeWidth={2}
                  className='text-[var(--color-brandBlue)]'
                />
              </div>

              <p className='text-[17px] font-semibold text-[var(--color-heading)] group-hover:text-[var(--color-brandBlue)] transition-colors duration-300 text-center'>
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
