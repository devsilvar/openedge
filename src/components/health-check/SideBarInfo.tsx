export default function SidebarInfo() {
  const steps = [
    {
      number: 1,
      title: 'Application Review',
      description:
        'Our team reviews your details within 48 hours to determine fit.',
    },
    {
      number: 2,
      title: 'Qualification Contact',
      description:
        'If qualified, a senior consultant will contact you to schedule the health check.',
    },
    {
      number: 3,
      title: 'Respectful Notification',
      description:
        'If not a fit for our current program, we will notify you respectfully via email.',
    },
  ];

  return (
    <div className='space-y-6'>
      {/* Card A — Process Timeline Card */}
      <div className='bg-white rounded-lg p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-[#E6E8EC]'>
        {/* Header Row */}
        <div className='flex items-center gap-2 mb-6'>
          <svg
            className='w-5 h-5 text-[#2F80ED]'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
            />
          </svg>
          <h4 className='text-lg font-semibold text-[#1A1D1F]'>
            What Happens After You Submit
          </h4>
        </div>

        {/* Timeline Section */}
        <div className='space-y-5'>
          {steps.map((step) => (
            <div key={step.number} className='flex gap-4'>
              {/* Number Circle */}
              <div className='w-9 h-9 rounded-full bg-[#E7F0FF] text-[#2F80ED] flex items-center justify-center font-semibold text-sm flex-shrink-0'>
                {step.number}
              </div>
              {/* Step Content */}
              <div>
                <p className='font-semibold text-[#1F2937] text-[15px] mb-1'>
                  {step.title}
                </p>
                <p className='text-sm text-[#6B7280] leading-relaxed'>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Card B — Consultant Testimonial Card */}
      <div className='bg-[#EAF2FF] rounded-2xl p-5 border border-[#DCE6FF]'>
        {/* Header Row */}
        <div className='flex items-center gap-3'>
          {/* Avatar Placeholder */}
          <div className='w-12 h-12 rounded-full bg-[#D1D5DB] flex items-center justify-center'>
            <svg
              className='w-6 h-6 text-[#6B7280]'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' />
            </svg>
          </div>
          {/* Consultant Info */}
          <div>
            <p className='font-semibold text-[#1F2937] text-[15px]'>
              Emeka Nwosu
            </p>
            <p className='text-sm text-[#6B7280]'>Lead Consultant, Open Edge</p>
          </div>
        </div>

        {/* Quote Text */}
        <p className='mt-4 text-sm text-[#4B5563] leading-relaxed italic'>
          "We've helped over 40 Nigerian hotels recover lost revenue. This
          health check is the first step toward your business turnaround."
        </p>
      </div>

      {/* Card C — Location Coverage Card */}
      <div className='relative rounded-2xl overflow-hidden h-44 bg-gradient-to-r from-[#1CA7A6] to-[#2BC48A]'>
        {/* Subtle map grid pattern overlay */}
        <div
          className='absolute inset-0 opacity-10'
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Center Icon Container */}
        <div className='absolute top-[15%] left-1/2 transform -translate-x-1/2'>
          <div className='w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.15)]'>
            <svg
              className='w-7 h-7 text-[#1CA7A6]'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' />
            </svg>
          </div>
        </div>

        {/* Location Label Pill */}
        <div className=' w-[90%] absolute bottom-6 left-1/2 transform -translate-x-1/2'>
          <span className='inline-flex px-5 py-2 rounded-full text-sm font-medium text-[#0F766E] bg-[#DFF6F0] shadow-sm'>
            Serving Lagos, Abuja, and Port Harcourt
          </span>
        </div>
      </div>
    </div>
  );
}
