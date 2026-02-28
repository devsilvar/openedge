export default function StepHeader({
  step,
  title,
}: {
  step: string;
  title: string;
}) {
  return (
    <div className='flex items-center gap-3'>
      <span className='text-xs font-semibold tracking-wide text-[var(--color-brandBlue)] bg-blue-50 px-3 py-1 rounded-full'>
        {step}
      </span>
      <h3 className='text-lg font-semibold text-[var(--color-heading)]'>
        {title}
      </h3>
    </div>
  );
}
