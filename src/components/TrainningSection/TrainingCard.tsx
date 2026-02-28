import type { ReactNode } from 'react';

interface TrainingCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  accentColor: string;
  accentSoftColor: string;
  label: string;
}

const TrainingCard = ({
  icon,
  title,
  description,
  accentColor,
  accentSoftColor,
  label,
}: TrainingCardProps) => {
  return (
    <div className='bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 w-full border border-gray-100'>
      {/* Icon */}
      <div
        className='w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm'
        style={{ backgroundColor: accentSoftColor }}
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className='text-[20px] font-semibold text-heading mb-4'>{title}</h3>

      {/* Description */}
      <p className='text-[14px] text-bodyText leading-[24px] mb-6'>
        {description}
      </p>

      {/* Divider with Accent */}
      <div className='w-full h-[3px] bg-gray-100 relative mb-3 rounded-full'>
        <div
          className='absolute left-0 top-0 h-[3px] rounded-full'
          style={{ width: '45%', backgroundColor: accentColor }}
        />
      </div>

      {/* Label */}
      <p className='text-[11px] tracking-[1.2px] text-mutedLabel uppercase font-semibold'>
        {label}
      </p>
    </div>
  );
};

export default TrainingCard;
