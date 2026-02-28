const StepItem = ({ step, title, description, active = false }: { step: string; title: string; description: string; active?: boolean }) => {
  return (
    <div className='flex items-start gap-4'>
      {/* Circle Indicator */}
      <div
        className={`w-4 h-4 rounded-full mt-1 border ${
          active
            ? 'bg-[var(--color-primary)] border-[var(--color-primary)]'
            : 'bg-white border-[var(--color-primary)]'
        }`}
      />

      {/* Content */}
      <div>
        <h4 className='text-[13px] font-semibold tracking-[0.5px] text-[var(--color-heading)] uppercase mb-1'>
          STEP {step}: {title}
        </h4>
        <p className='text-[12.5px] leading-[18px] text-[var(--color-muted)] max-w-[360px]'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default StepItem;
