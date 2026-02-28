import { useField } from 'formik';

interface TextAreaFieldProps {
  label: string;
  name: string;
  placeholder?: string;
}

export default function TextAreaField({ label, ...props }: TextAreaFieldProps) {
  const [field, meta] = useField(props.name);
  const hasError = meta.touched && meta.error;

  return (
    <div className='space-y-2 group'>
      <label className='text-[12px] text-[#374151] font-medium transition-colors duration-200 group-focus-within:text-[var(--color-brandBlue)] group-focus-within:font-semibold'>
        {label}
      </label>

      <textarea
        {...field}
        {...props}
        rows={4}
        className={`w-full border rounded-md px-3 py-2 text-[13px] outline-none resize-none transition-all duration-300 hover:border-gray-400
          ${hasError 
            ? 'border-red-500 focus:ring-2 focus:ring-red-200 shake-error' 
            : 'border-[#e5e7eb] focus:ring-2 focus:ring-blue-100 focus:border-[#2563eb]'
          }`}
      />

      {hasError && (
        <p className='text-[11px] text-red-500 fade-in flex items-center gap-1'>
          <span>⚠</span> {meta.error}
        </p>
      )}
    </div>
  );
}
