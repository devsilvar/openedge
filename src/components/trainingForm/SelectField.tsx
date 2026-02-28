import { useField } from 'formik';
import type { ReactNode } from 'react';

interface SelectFieldProps {
  label: string;
  name: string;
  children: ReactNode;
}

export default function SelectField({ label, children, ...props }: SelectFieldProps) {
  const [field, meta] = useField(props.name);

  return (
    <div className='space-y-2'>
      <label className='text-[12px] text-[#374151] font-medium'>{label}</label>

      <select
        {...field}
        {...props}
        className='w-full border border-[#e5e7eb] rounded-md px-3 py-2 text-[13px] bg-white outline-none focus:ring-1 focus:ring-[#2563eb]'
      >
        {children}
      </select>

      {meta.touched && meta.error && (
        <p className='text-[11px] text-red-500'>{meta.error}</p>
      )}
    </div>
  );
}
