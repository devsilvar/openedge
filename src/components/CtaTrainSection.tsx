import { ArrowRight } from 'lucide-react';

const CtaTrainSection = () => {
  return (
    <section className='w-full bg-white py-20 px-6'>
      <div className='mx-auto max-w-[1100px] text-center'>
        <h2 className='text-[var(--color-heading)] font-bold text-[32px] leading-[1.4] max-w-[760px] mx-auto mb-4'>
          Ready to be trained and placed in an operationally efficient hospitality business?
        </h2>

        <p className='text-[18px] text-[var(--color-muted)] max-w-2xl mx-auto mb-10 leading-[1.7]'>
          Join our selective training program and get placed in high-performance hospitality businesses.
        </p>

        <a href='/training-form'>
          <button className='bg-primary hover:bg-primary-dark text-white text-[14px] font-bold px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-2 hover:scale-105'>
            Proceed to Application Form
            <ArrowRight className='w-5 h-5' strokeWidth={2.5} />
          </button>
        </a>
      </div>
    </section>
  );
};

export default CtaTrainSection;
