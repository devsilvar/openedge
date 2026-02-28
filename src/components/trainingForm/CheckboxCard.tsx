import { Field } from 'formik';

interface CheckboxCardProps {
  name: string;
  value: string;
  label: string;
}

export default function CheckboxCard({
  name,
  value,
  label,
}: CheckboxCardProps) {
  return (
    <label className='flex items-center gap-3 border border-[#e5e7eb] rounded-md px-4 py-3 text-[13px] cursor-pointer'>
      <Field type='checkbox' name={name} value={value} className='w-4 h-4' />
      {label}
    </label>
  );
}
