import RoleCard from './RoleCard';
import { Users, Sparkles, UserCheck, Wrench, DollarSign, Quote } from 'lucide-react';

const RolesSection = () => {
  return (
    <section className='bg-white py-20'>
      <div className='max-w-[80%] mx-auto px-6'>
        {/* Header */}
        <div className='text-center mb-14'>
          <p className='text-[12px] font-bold tracking-widest text-[var(--color-brandBlue)] uppercase mb-3'>
            THE ROLES
          </p>
          <h2 className='text-[32px] font-bold text-heading mb-4'>
            Roles We Train
          </h2>
          <p className='text-[15px] text-mutedText'>
            Specialized tracks for the five pillars of hospitality operations.
          </p>
        </div>

        {/* Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <RoleCard
            title='Head of Operations'
            description='The conductor. Learn to synchronize all departments, manage owner expectations, and drive profitability.'
            icon={
              <Users className='w-6 h-6 text-blue-600' strokeWidth={2.5} />
            }
          />

          <RoleCard
            title='Housekeeping Supervisor'
            description='The standard bearer. Master inventory, hygiene audits, and team efficiency in the most critical department.'
            icon={
              <Sparkles className='w-6 h-6 text-blue-600' strokeWidth={2.5} />
            }
          />

          <RoleCard
            title='Front Office Supervisor'
            description='The face. Guest recovery, revenue management, and check-in/check-out precision under pressure.'
            icon={
              <UserCheck className='w-6 h-6 text-blue-600' strokeWidth={2.5} />
            }
          />

          <RoleCard
            title='Facility/Maintenance Supervisor'
            description='The backbone. Preventative maintenance scheduling, generator management, and rapid fix protocols.'
            icon={
              <Wrench className='w-6 h-6 text-blue-600' strokeWidth={2.5} />
            }
          />

          <RoleCard
            title='Cost Control Officer'
            description='The auditor. Procurement integrity, waste reduction, and daily P&L tracking to stop revenue leakage.'
            icon={
              <DollarSign className='w-6 h-6 text-blue-600' strokeWidth={2.5} />
            }
          />

          {/* Quote Card */}
          <div className='bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-md p-8 flex items-center justify-center text-center relative overflow-hidden border border-blue-100'>
            <Quote className='absolute top-4 left-4 w-8 h-8 text-blue-200' strokeWidth={2} />
            <p className='text-[14.5px] leading-[24px] text-heading font-medium relative z-10'>
              "These roles are the bedrock of business stability. Without them,
              strategy is just a suggestion."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RolesSection;
