import { TrendingUp, Shield, Users } from 'lucide-react';

export default function QuickValueSection() {
  const values = [
    {
      icon: TrendingUp,
      title: 'Build Wealth',
      description: 'Transform chaos into profitable, sustainable operations',
    },
    {
      icon: Shield,
      title: 'Fix Systems',
      description: 'Proven 90-day operating system implementation',
    },
    {
      icon: Users,
      title: 'Develop Leaders',
      description: 'Train middle management to run your business',
    },
  ];

  return (
    <section className='w-full bg-white py-14 border-b border-gray-100'>
      <div className='mx-auto max-w-[1200px] px-6'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className='flex flex-col items-center text-center p-5 rounded-xl bg-gradient-to-br from-blue-50/50 to-white border border-blue-100/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1'
              >
                <div className='w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-brandBlue)] to-blue-600 flex items-center justify-center mb-3 shadow-lg'>
                  <Icon className='w-6 h-6 text-white' />
                </div>
                <h3 className='text-[15px] font-bold text-[var(--color-heading)] mb-2'>
                  {value.title}
                </h3>
                <p className='text-[13px] text-[var(--color-muted)] leading-[20px]'>
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
