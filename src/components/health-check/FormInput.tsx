interface FormInputProps {
  label: string;
  placeholder: string;
  register?: any;
}

export default function FormInput({
  label,
  placeholder,
  register,
}: FormInputProps) {
  return (
    <div className='space-y-1 group'>
      <label className='text-xs text-[var(--color-muted)] transition-colors duration-200 group-focus-within:text-[var(--color-brandBlue)] group-focus-within:font-semibold'>
        {label}
      </label>
      <input
        {...register}
        placeholder={placeholder}
        className='w-full border border-[var(--color-border-light)] rounded-md px-4 py-2 text-sm focus:outline-none focus:border-[var(--color-brandBlue)] focus:ring-2 focus:ring-blue-100 transition-all duration-300 hover:border-gray-400'
      />
    </div>
  );
}
