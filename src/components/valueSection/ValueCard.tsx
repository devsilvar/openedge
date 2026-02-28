const ValueCard = ({
  icon,
  title,
  description,
  iconBg,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBg: string;
}) => {
  return (
    <div className='bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4 text-center border border-gray-100 group flex flex-col items-center'>
      <div
        className='w-12 h-12 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300'
        style={{ backgroundColor: iconBg }}
      >
        {icon}
      </div>

      <h3 className='text-[15px] font-bold text-[var(--color-heading)] mb-2'>
        {title}
      </h3>

      <p className='text-[13px] leading-[1.5] text-[var(--color-muted)]'>
        {description}
      </p>
    </div>
  );
};

export default ValueCard;
