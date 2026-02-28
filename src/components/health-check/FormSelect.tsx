interface FormSelectProps {
  label: string;
  placeholder: string;
  name?: string;
  register?: any;
  options?: string[];
}

export default function FormSelect({
  label,
  placeholder,
  name,
  register,
  options = [],
}: FormSelectProps) {
  return (
    <div className='space-y-1 group'>
      <label className='text-xs text-[var(--color-muted)] transition-colors duration-200 group-focus-within:text-[var(--color-brandBlue)] group-focus-within:font-semibold'>
        {label}
      </label>
      <select
        {...register}
        name={name}
        className='w-full border border-[var(--color-border-light)] rounded-md px-4 py-2 text-sm bg-white focus:outline-none focus:border-[var(--color-brandBlue)] focus:ring-2 focus:ring-blue-100 transition-all duration-300 hover:border-gray-400 cursor-pointer'
      >
        <option value=''>{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
