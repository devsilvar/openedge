import React from 'react';

interface RoleCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const RoleCard = ({ icon, title, description }: RoleCardProps) => {
  return (
    <div className='bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-7 border border-gray-100 group'>
      <div className='w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5 group-hover:bg-blue-100 transition-colors duration-300'>
        {icon}
      </div>

      <h3 className='text-[17px] font-semibold text-heading mb-3'>{title}</h3>

      <p className='text-[13.5px] leading-[22px] text-bodyText'>{description}</p>
    </div>
  );
};

export default RoleCard;
