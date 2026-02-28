import type { UseFormRegister } from 'react-hook-form';

interface RadioCardProps {
  label: string;
  name: string;
  value: string;
  register: UseFormRegister<any>;
  defaultChecked?: boolean;
}

export default function RadioCard({
  label,
  name,
  value,
  register,
  defaultChecked,
}: RadioCardProps) {
  return (
    <label
      className={`flex items-center gap-3 border rounded-md px-4 py-3 text-sm cursor-pointer bg-white ${defaultChecked ? 'border-[var(--color-brandBlue)] bg-blue-50' : 'border-[var(--color-border-light)]'}`}
    >
      <input
        type='radio'
        value={value}
        {...register(name)}
        defaultChecked={defaultChecked}
        className='accent-[var(--color-brandBlue)] w-4 h-4'
      />
      {label}
    </label>
  );
}
