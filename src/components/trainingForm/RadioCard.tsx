import { Field } from 'formik';

interface RadioCardProps {
  label: string;
  name: string;
  value: string;
  defaultChecked?: boolean;
}

export default function RadioCard({
  label,
  name,
  value,
  defaultChecked,
}: RadioCardProps) {
  return (
    <label
      className={`flex items-start gap-3 border rounded-md px-4 py-3 text-sm cursor-pointer bg-white ${
        defaultChecked
          ? 'border-[var(--color-brandBlue)] bg-blue-50'
          : 'border-[var(--color-border-light)]'
      }`}
    >
      <Field
        type='radio'
        name={name}
        value={value}
        defaultChecked={defaultChecked}
        className='accent-[var(--color-brandBlue)] w-4 h-4 mt-0.5'
      />
      <span className='text-[#374151]'>{label}</span>
    </label>
  );
}
