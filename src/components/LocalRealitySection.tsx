import { LogOut, UserPlus, Brain, LayoutGrid } from 'lucide-react';

export default function LocalRealitySection() {
  const bullets = [
    'Designed for owners to exit daily operations and embrace strategic management',
    'Accounts for staff turnover, skill gaps, and mindset-habits',
    'Manages human behavior under pressure',
    'Reduces owner fatigue and decision overload',
  ];

  const cards: { title: string; text: string; icon: any }[] = [
    {
      title: 'OWNER EXIT',
      text: "We build systems that run the business so you don't have to be on-site 24/7 to prevent theft or errors.",
      icon: LogOut,
    },
    {
      title: 'STAFF GAPS',
      text: 'Our OS simplifies complex roles so new hires can be productive within 48 hours of joining.',
      icon: UserPlus,
    },
    {
      title: 'HUMAN BEHAVIOR',
      text: 'Built for the psychology of the local workforce, incentivizing honesty and extreme ownership.',
      icon: Brain,
    },
    {
      title: 'DECISION OVERLOAD',
      text: 'We eliminate the "Oga, what should I do?" calls by pre-defining responses to common issues.',
      icon: LayoutGrid,
    },
  ];

  return (
    <section className='w-full py-28 px-6 bg-gray-50'>
      <div className='mx-auto max-w-[1200px] grid lg:grid-cols-2 gap-16'>
        {/* Left Column */}
        <div>
          <p className='text-[13px] font-semibold tracking-widest uppercase text-[var(--color-brandBlue)] mb-4'>
            THE PROBLEM
          </p>

          <h2 className='text-[34px] font-bold leading-tight text-[var(--color-heading)] mb-5'>
            Most approach to starting or fixing a hospitality business fail in Nigeria
          </h2>

          <p className='text-[15px] text-[var(--color-navMuted)] leading-[1.7] mb-4 max-w-md'>
            Most approach to starting or fixing a hospitality business fail in Nigeria because they are either imported, theoretical, or ignore local realities.
          </p>

          <p className='text-[15px] text-[var(--color-navMuted)] leading-[1.7] mb-8 max-w-md font-semibold'>
            The Open Edge Solution is different:
          </p>

          <ul className='space-y-4'>
            {bullets.map((item) => (
              <li key={item} className='flex items-start gap-4'>
                <span className='mt-0.5 flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-[14px] font-bold'>
                  ✓
                </span>
                <span className='text-[15px] text-[var(--color-navMuted)] leading-[1.7]'>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column */}
        <div className='grid sm:grid-cols-2 gap-6'>
          {cards.map((card) => (
            <div
              key={card.title}
              className='bg-white rounded-2xl p-7 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-1'
            >
              <div className='w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-5 group-hover:bg-blue-100 transition-colors duration-300'>
                <card.icon className='w-7 h-7 text-[var(--color-brandBlue)]' strokeWidth={2} />
              </div>

              <h3 className='text-[16px] font-bold text-[var(--color-heading)] mb-3 tracking-wide'>
                {card.title}
              </h3>

              <p className='text-[14px] text-[var(--color-navMuted)] leading-[1.6]'>
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
