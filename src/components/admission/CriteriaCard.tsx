import { CheckCircle, XCircle } from 'lucide-react';

interface CriteriaCardProps {
  type: 'positive' | 'negative';
  title: string;
  items: string[];
}

export default function CriteriaCard({
  type,
  title,
  items,
}: CriteriaCardProps) {
  const isPositive = type === 'positive';

  return (
    <div>
      {/* Title with larger icon */}
      <div className='flex items-center gap-4 mb-8'>
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
          isPositive ? 'bg-green-50' : 'bg-red-50'
        }`}>
          {isPositive ? (
            <CheckCircle className='w-7 h-7 text-green-600' strokeWidth={2.5} />
          ) : (
            <XCircle className='w-7 h-7 text-red-600' strokeWidth={2.5} />
          )}
        </div>

        <h3 className='text-[20px] font-bold text-[var(--color-heading)]'>
          {title}
        </h3>
      </div>

      {/* List with better icons - no more dots! */}
      <ul className='space-y-4'>
        {items.map((item: string, index: number) => (
          <li
            key={index}
            className='flex gap-4 text-[17px] text-[var(--color-muted)] leading-[1.7]'
          >
            <div className={`mt-0.5 w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 ${
              isPositive ? 'bg-green-100' : 'bg-red-100'
            }`}>
              {isPositive ? (
                <CheckCircle className='w-4 h-4 text-green-600' strokeWidth={2.5} />
              ) : (
                <XCircle className='w-4 h-4 text-red-600' strokeWidth={2.5} />
              )}
            </div>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
