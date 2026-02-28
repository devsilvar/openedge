interface ConstraintCardProps {
  title: string;
  description: string;
}

export default function ConstraintCard({
  title,
  description,
}: ConstraintCardProps) {
  return (
    <div className='group relative bg-white border  rounded-md px-7 py-6 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1'>
      <div className='absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-md group-hover:w-1.5 transition-all duration-300' />

      <h3 className='text-[var(--color-heading)] font-bold text-[16px] mb-2 pl-3'>
        {title}
      </h3>

      <p className='text-[var(--color-muted)] text-[14px] leading-[1.7] pl-3'>
        {description}
      </p>
    </div>
  );
}
