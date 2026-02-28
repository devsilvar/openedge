import React from 'react';

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isVisible?: boolean;
  index?: number;
}

export default function InfoCard({ icon, title, description, isVisible, index }: InfoCardProps) {
  return (
    <div className={`group bg-white rounded-xl p-5 sm:p-6 w-full shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1 text-left card-magnetic ${isVisible ? `stagger-${(index || 0) + 1}` : 'opacity-0'}`}>
      <div className='w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-blue-100 transition-colors duration-300 group-hover:scale-110 mx-0'>
        {icon}
      </div>

      <h3 className='text-[14px] sm:text-[15px] md:text-[16px] font-bold text-[#1f2937] mb-2 sm:mb-3 text-left'>
        {title}
      </h3>

      <p className='text-[13px] sm:text-[14px] leading-[1.6] text-[#6b7280] text-left'>
        {description}
      </p>
    </div>
  );
}
