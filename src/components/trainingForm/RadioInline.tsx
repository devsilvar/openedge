import { Field } from 'formik';

export default function RadioInline({ name, value, label }:{name:string , value:string , label:string}) {
  return (
    <label className='flex items-center gap-2 text-[13px] cursor-pointer'>
      <Field type='radio' name={name} value={value} />
      {label}
    </label>
  );
}
