import CriteriaCard from './CriteriaCard';

export default function AdmissionCriteriaSection() {
  return (
    <section id='admission-criteria' className='bg-gray-50 py-20'>
      <div className='mx-auto max-w-[1200px] px-6'>
        {/* Header */}
        <div className='text-center mb-16'>
          <p className='text-[12px] font-bold tracking-widest text-[var(--color-brandBlue)] uppercase mb-3'>
            WHO THIS IS FOR
          </p>
          <h2 className='text-[34px] font-bold text-[var(--color-heading)] mb-4'>
            Who This Training Is For
          </h2>
          <p className='text-[18px] text-[var(--color-muted)] max-w-2xl mx-auto leading-[1.7]'>
            This training is designed for hospitality professionals who:
          </p>
        </div>

        {/* Main Card Container */}
        <div className='bg-white rounded-2xl shadow-lg p-10 border border-gray-100'>
          <div className='grid md:grid-cols-2 gap-16'>
            <CriteriaCard
              type='positive'
              title='This Training Is For'
              items={[
                'Currently work (or want to work) in operations or middle management',
                'Are tired of chaotic workplaces with no systems',
                'Want to be taken seriously as operational leaders',
                'Are willing to learn, be accountable, and do the work properly',
                'Want to grow into roles where they are trusted to run the business',
              ]}
            />

            <CriteriaCard
              type='negative'
              title='This Training is NOT For'
              items={[
                'People looking for certificates without responsibility',
                'Those unwilling to uphold standards',
                'Anyone expecting shortcuts or entitlement',
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
