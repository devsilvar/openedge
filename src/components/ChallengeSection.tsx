import { Lock, Smile, BarChart3, Flame, AlertTriangle } from 'lucide-react';

interface Challenge {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
}

const challenges: Challenge[] = [
  {
    id: 1,
    icon: Lock,
    title: 'Owner Trapped',
    description:
      "You can't leave the premises without things falling apart. You are the system.",
    iconBg: 'bg-red-50',
    iconColor: 'text-red-500',
  },
  {
    id: 2,
    icon: Smile,
    title: 'Weak Management',
    description:
      'Managers who act like messengers, lacking the skills to lead or solve problems autonomously.',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-500',
  },
  {
    id: 3,
    icon: BarChart3,
    title: 'Revenue Leaks',
    description:
      'Inventory theft, unrecorded sales, and waste are silently draining your profits daily.',
    iconBg: 'bg-yellow-50',
    iconColor: 'text-yellow-500',
  },
  {
    id: 4,
    icon: Flame,
    title: 'Burnout',
    description:
      'The constant firefighting is exhausting, leaving no energy for strategic growth.',
    iconBg: 'bg-gray-100',
    iconColor: 'text-gray-500',
  },
];

function ChallengeCard({ challenge }: { challenge: Challenge }) {
  const Icon = challenge.icon;

  return (
    <div className='group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ease-out hover:-translate-y-1 cursor-pointer border border-gray-100 card-magnetic'>
      <div className={`${challenge.iconBg} w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 float-animation`}>
        <Icon className={`${challenge.iconColor} w-7 h-7`} />
      </div>

      <h3 className='text-[16px] font-bold text-[var(--color-heading)] mb-3 group-hover:text-[var(--color-brandBlue)] transition-colors duration-300'>
        {challenge.title}
      </h3>

      <p className='text-[17px] text-[var(--color-muted)] leading-[26px]'>
        {challenge.description}
      </p>
    </div>
  );
}

export default function ChallengeSection() {
  return (
    <section className='w-full bg-gray-50 py-20'>
      <div className='mx-auto max-w-[1200px] px-6'>
        
        {/* TOP SECTION: Text Left, Visual Right */}
        <div className='grid grid-cols-1 lg:grid-cols-[60%_40%] gap-10 items-center mb-16'>
          
          {/* LEFT - Text Content */}
          <div>
            <p className='text-[12px] font-bold tracking-widest text-[var(--color-brandBlue)] uppercase mb-3'>
              THE PROBLEM
            </p>

            <h2 className='text-[32px] md:text-[36px] font-bold text-[var(--color-heading)] mb-5 leading-tight'>
              Hospitality businesses rarely fail because owners don't care.
            </h2>

            <p className='text-[18px] text-[var(--color-muted)] leading-[1.7] mb-4'>
              They fail because owners and middle management are misaligned. Owners expect lifestyle-level returns and act as operators without strong operating systems. Middle management sees no clear career path and no accountability, so revenue leaks through inefficiency and theft. The business stays busy, but never truly works.
            </p>

            <p className='text-[13px] text-[var(--color-muted)] leading-[1.7]'>
              Most hospitality frameworks don't address this reality, especially within the complexities of the Nigerian market. We only work with serious, ambitious hospitality owners who are ready to fix their systems and build long-term wealth.
            </p>
          </div>

          {/* RIGHT - Visual Element */}
          <div className='relative'>
            <div className='bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 rounded-2xl p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:scale-105'>
              <div className='flex items-center justify-center mb-6'>
                <div className='w-20 h-20 rounded-full bg-red-100 flex items-center justify-center float-animation'>
                  <AlertTriangle className='w-12 h-12 text-red-500' strokeWidth={2} />
                </div>
              </div>
              
              <h3 className='text-[18px] font-bold text-center text-[var(--color-heading)] mb-4'>
                The Vicious Cycle
              </h3>

              <ul className='space-y-3 text-[13px] text-[var(--color-muted)]'>
                <li className='flex items-start gap-2'>
                  <span className='w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0' />
                  <span>Owners remain trapped in daily operations</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='w-2 h-2 rounded-full bg-orange-500 mt-1.5 shrink-0' />
                  <span>Staff extract value without accountability</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='w-2 h-2 rounded-full bg-yellow-500 mt-1.5 shrink-0' />
                  <span>Revenue grows, but profit does not</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='w-2 h-2 rounded-full bg-gray-500 mt-1.5 shrink-0' />
                  <span>Businesses cannot be scaled</span>
                </li>
                <li className='flex items-start gap-2'>
                  <span className='w-2 h-2 rounded-full bg-red-600 mt-1.5 shrink-0' />
                  <span>Burnout becomes normal</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Challenge Cards Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {challenges.map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} />
          ))}
        </div>

      </div>
    </section>
  );
}
