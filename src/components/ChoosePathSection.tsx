import { Briefcase, GraduationCap } from 'lucide-react';
import { Link } from 'react-router';

interface PathCardProps {
  type: 'owners' | 'managers';
  title: string;
  description: string;
  buttonText: string;
  path: string;
  darkButton?: boolean;
}

const iconMap = {
  owners: Briefcase,
  managers: GraduationCap,
};

export function PathCard({
  type,
  title,
  description,
  path,
  buttonText,
  darkButton = false,
}: PathCardProps) {
  const Icon = iconMap[type];

  return (
    <div className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 px-7 py-8 text-center border border-gray-100 group hover:-translate-y-1'>
      <div className='flex justify-center mb-5'>
        <div className='w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300'>
          <Icon className='w-7 h-7 text-[var(--color-primary)]' strokeWidth={2} />
        </div>
      </div>

      <h3 className='text-[20px] font-bold text-[var(--color-heading)] mb-3'>
        {title}
      </h3>

      <p className='text-[17px] text-[var(--color-muted)] leading-[1.6] mb-7 max-w-sm mx-auto'>
        {description}
      </p>
      <Link to={path}>
        <button
          className={`px-7 py-3.5 text-[13px] font-bold tracking-wide rounded-full transition-all duration-300 ${
            darkButton
              ? 'bg-[var(--color-primary)] text-white shadow-lg hover:shadow-xl hover:bg-blue-700'
              : 'bg-white border-2 border-[var(--color-primary)] text-[var(--color-primary)] shadow-md hover:shadow-lg hover:bg-gray-50'
          }`}
        >
          {buttonText}
        </button>
      </Link>
    </div>
  );
}

export default function ChoosePathSection() {
  return (
    <section className='bg-gray-50 py-20'>
      <div className='mx-auto max-w-[1100px] px-6'>
        <h2 className='text-[34px] font-bold text-[var(--color-heading)] text-center mb-16'>
          Choose Your Path
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
          <PathCard
            type='owners'
            title='For Owners'
            description='Ready to fix the bleeding and step back from daily operations?'
            buttonText='Book Health Check'
            path='/book-health-check'
            darkButton
          />

          <PathCard
            type='managers'
            title='For Managers'
            description='Need practical tools to manage staff and inventory effectively?'
            path='/training'
            buttonText='Join Training'
          />
        </div>
      </div>
    </section>
  );
}
