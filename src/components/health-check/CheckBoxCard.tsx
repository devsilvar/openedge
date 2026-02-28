import { useWatch, type Control, type UseFormSetValue } from 'react-hook-form';

interface CheckboxCardProps {
  label: string;
  name: string;
  value: string;
  control: Control<any>;
  setValue: UseFormSetValue<any>;
}

export default function CheckboxCard({
  label,
  name,
  value,
  control,
  setValue,
}: CheckboxCardProps) {
  const values =
    (useWatch({
      control,
      name,
      defaultValue: [],
    }) as string[]) || [];

  const isChecked = values.includes(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setValue(name, [...values, value], { shouldValidate: true });
    } else {
      setValue(
        name,
        values.filter((v) => v !== value),
        { shouldValidate: true },
      );
    }
  };

  return (
    <label
      className={`flex items-center gap-3 border rounded-md px-4 py-3 text-sm cursor-pointer bg-white ${isChecked ? 'border-[var(--color-brandBlue)] bg-blue-50' : 'border-[var(--color-border-light)]'}`}
    >
      <input
        type='checkbox'
        checked={isChecked}
        onChange={handleChange}
        className='accent-[var(--color-brandBlue)] w-4 h-4 rounded'
      />
      {label}
    </label>
  );
}
