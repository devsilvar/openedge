const ValuePropositionSection = () => {
  return (
    <section className='bg-white py-20'>
      <div className='max-w-[80%] mx-auto px-6'>
        {/* Header */}
        <div className='text-center mb-14'>
          <p className='text-[12px] font-bold tracking-widest text-[var(--color-brandBlue)] uppercase mb-3'>
            WHAT YOU GAIN
          </p>
          <h2 className='text-[32px] font-bold text-[var(--color-heading)] mb-4'>
            What You Gain After Training
          </h2>
        </div>

        {/* Content Grid */}
        <div className='grid md:grid-cols-2 gap-10 max-w-4xl mx-auto'>
          {/* Left Column */}
          <div className='space-y-6'>
            <ValueItem 
              title="Structured Career Growth"
              description="You move from survival to career stability with a clear ladder from junior to senior operational roles."
            />
            <ValueItem 
              title="Practical Operational Leadership Skills"
              description="Not theoretical leadership, but hands-on systems management and team accountability."
            />
            <ValueItem 
              title="Resume-Worthy Certification"
              description="An Open Edge certification signals to employers that you can manage operations, not just show up to work."
            />
          </div>

          {/* Right Column */}
          <div className='space-y-6'>
            <ValueItem 
              title="Access to Better Opportunities"
              description="Our employer network actively recruits Open Edge-trained talent for middle-management vacancies."
            />
            <ValueItem 
              title="Higher Earning Potential"
              description="Trained managers earn significantly more than untrained counterparts in similar roles."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface ValueItemProps {
  title: string;
  description: string;
}

function ValueItem({ title, description }: ValueItemProps) {
  return (
    <div className='bg-gray-50 rounded-xl p-6 border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300'>
      <h3 className='text-[16px] font-bold text-[var(--color-heading)] mb-2'>
        {title}
      </h3>
      <p className='text-[17px] text-[var(--color-muted)] leading-[1.7]'>
        {description}
      </p>
    </div>
  );
}

export default ValuePropositionSection;
