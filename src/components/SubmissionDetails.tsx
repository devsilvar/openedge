import { X } from 'lucide-react';
import type { Submission } from '@/utils/googleSheetsApi';

interface SubmissionDetailsProps {
  submission: Submission | null;
  onClose: () => void;
}

export default function SubmissionDetails({ submission, onClose }: SubmissionDetailsProps) {
  if (!submission) return null;

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return 'N/A';
    try {
      return new Date(dateStr).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return dateStr;
    }
  };

  // Exclude system fields from display
  const systemFields = ['id', 'Timestamp', 'FormType'];
  const displayFields = Object.entries(submission).filter(
    ([key]) => !systemFields.includes(key)
  );

  return (
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4'>
      <div className='bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col'>
        {/* Header */}
        <div className='bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 flex justify-between items-start'>
          <div>
            <h2 className='text-2xl font-bold mb-2'>Submission Details</h2>
            <div className='flex gap-4 text-sm opacity-90'>
              <span>📅 {formatDate(submission.Timestamp)}</span>
              <span className='px-2 py-1 bg-white/20 rounded'>
                {submission.FormType}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className='text-white hover:bg-white/20 p-2 rounded-lg transition'
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className='p-6 overflow-y-auto flex-1'>
          <div className='space-y-4'>
            {displayFields.map(([key, value]) => (
              <div key={key} className='border-b border-gray-200 pb-4 last:border-0'>
                <label className='text-sm font-semibold text-gray-600 uppercase tracking-wide'>
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </label>
                <div className='mt-1 text-gray-900'>
                  {value === '' || value === null || value === undefined ? (
                    <span className='text-gray-400 italic'>Not provided</span>
                  ) : (
                    <span className='whitespace-pre-wrap'>{String(value)}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className='bg-gray-50 p-4 flex justify-end gap-3'>
          <button
            onClick={onClose}
            className='px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg font-medium transition'
          >
            Close
          </button>
          <button
            onClick={() => {
              // Export to CSV or print functionality
              window.print();
            }}
            className='px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition'
          >
            Print / Export
          </button>
        </div>
      </div>
    </div>
  );
}
