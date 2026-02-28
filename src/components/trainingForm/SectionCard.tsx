import type { ReactNode } from 'react';

interface SectionCardProps {
  title: {
    number: number;
    text: string;
  };
  children: ReactNode;
}

export default function SectionCard({ title, children }: SectionCardProps) {
  return (
    <div className='bg-white border border-[#e5e7eb] rounded-lg'>
      <div className='px-6 py-4 border-b border-[#e5e7eb] flex items-center gap-2'>
        <div className='w-5 h-5 rounded-full bg-[#1d4ed8] text-white text-[12px] flex items-center justify-center font-semibold'>
          {title.number}
        </div>
        <h3 className='text-[14px] font-semibold text-[#1f2937]'>
          {title.text}
        </h3>
      </div>

      <div className='p-6 space-y-6'>{children}</div>
    </div>
  );
}
