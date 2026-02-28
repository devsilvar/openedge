interface SubmitSectionProps {
  isSubmitting?: boolean;
}

export default function SubmitSection({ isSubmitting }: SubmitSectionProps) {
  return (
    <div className='pt-6 text-center space-y-4'>
      <button
        type='submit'
        disabled={isSubmitting}
        className='bg-[var(--color-brandBlue)] hover:bg-[var(--color-primary-dark)] text-white px-8 py-3 rounded-md text-sm font-semibold shadow-md disabled:opacity-50 disabled:cursor-not-allowed'
      >
        {isSubmitting ? 'Submitting...' : 'Submit and Request Health Check Review →'}
      </button>

      <p className='text-xs text-[var(--color-muted)]'>
        🔒 Your business data is handled with strict confidentiality.
      </p>
    </div>
  );
}
