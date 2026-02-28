import { ApplicationForm } from '@/components/index';

const TrainingForm = () => {
  return (
    <>
      <div
        className='mx-auto px-6 py-10 text-center'
        style={{ maxWidth: 'var(--container-width)' }}
      >
        <h2 className='text-3xl font-semibold text-[var(--color-heading)] mb-4'>
          Open Edge Training Application Form
        </h2>

        <p className='text-sm text-[var(--color-muted)] max-w-2xl mx-auto mb-14 leading-relaxed'>
          This programme is selective. We train operators we believe can actually run hospitality businesses properly.
        </p>
      </div>
      <ApplicationForm />
    </>
  );
};

export default TrainingForm;
