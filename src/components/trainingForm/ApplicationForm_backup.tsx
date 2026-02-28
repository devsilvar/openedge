import { Formik, Form } from 'formik';
import { applicationSchema } from '@/validation/applicationSchema';
import SectionCard from './SectionCard';
import SidebarCard from './SidebarCard';
import InputField from './InputField';
import SelectField from './SelectField';
import CheckboxCard from './CheckboxCard';
import RadioInline from './RadioInline';
import RadioCard from './RadioCard';
import TextAreaField from './TextAreaField';
export default function ApplicationForm() {
  return (
    <div className='bg-[#f3f4f6] min-h-screen py-10 px-6'>
      <div className='max-w-[1100px] mx-auto grid grid-cols-[2.1fr_1fr] gap-8'>
        <Formik
          initialValues={{
            fullName: '',
            whatsapp: '',
            email: '',
            city: '',
            targetRole: '',
            currentSituation: '',
            experience: '',
            businessTypes: [],
          }}
          validationSchema={applicationSchema}
          onSubmit={(values) => console.log(values)}
        >
          <Form className='space-y-8'>
            <SectionCard title={{ number: 1, text: 'Personal Details' }}>
              <InputField
                label='Full Name'
                name='fullName'
                placeholder='Official name as per ID'
              />

              <div className='grid grid-cols-2 gap-6'>
                <InputField
                  label='WhatsApp Phone Number'
                  name='whatsapp'
                  placeholder='+234 800 000 0000'
                />
                <InputField
                  label='Email Address'
                  name='email'
                  placeholder='john@example.com'
                />
              </div>

              <SelectField label='City of Residence' name='city'>
                <option value=''>Select your city...</option>
                <option value='lagos'>Lagos</option>
                <option value='abuja'>Abuja</option>
              </SelectField>
            </SectionCard>

            <SectionCard title={{ number: 2, text: 'Role & Background' }}>
              <div className='grid grid-cols-2 gap-6'>
                <SelectField label='Target Role Track' name='targetRole'>
                  <option value=''>Head of Operations / GM</option>
                </SelectField>

                <SelectField label='Current Situation' name='currentSituation'>
                  <option value=''>Currently working in role</option>
                </SelectField>
              </div>

              <SelectField label='Total Years of Experience' name='experience'>
                <option value=''>Select</option>
                <option value='0-2'>0-2 Years</option>
                <option value='3-5'>3-5 Years</option>
                <option value='6-9'>6-9 Years</option>
                <option value='10+'>10+ Years</option>
              </SelectField>

              <div className='space-y-3'>
                <p className='text-[12px] font-medium text-[#374151]'>
                  Business Types Worked In (Select all that apply)
                </p>

                <div className='grid grid-cols-3 gap-4'>
                  <CheckboxCard
                    name='businessTypes'
                    value='Boutique Hotel'
                    label='Boutique Hotel'
                  />
                  <CheckboxCard
                    name='businessTypes'
                    value='Large Chain Hotel'
                    label='Large Chain Hotel'
                  />
                  <CheckboxCard
                    name='businessTypes'
                    value='Serviced Apartments'
                    label='Serviced Apartments'
                  />
                  <CheckboxCard
                    name='businessTypes'
                    value='Restaurant / Cafe'
                    label='Restaurant / Cafe'
                  />
                  <CheckboxCard
                    name='businessTypes'
                    value='Resort / Beach Club'
                    label='Resort / Beach Club'
                  />
                  <CheckboxCard
                    name='businessTypes'
                    value='Event Center'
                    label='Event Center'
                  />
                </div>
              </div>
            </SectionCard>

            <SectionCard title={{ number: 3, text: 'Mindset & Supervision' }}>
              <div className='space-y-3'>
                <p className='text-[12px] font-medium text-[#374151]'>
                  Which statement best describes your approach to work?
                </p>

                <div className='space-y-3'>
                  <RadioCard
                    name='workApproach'
                    value='predictable'
                    label='I prefer clear instructions and a predictable routine. I execute what I am told perfectly.'
                  />
                  <RadioCard
                    name='workApproach'
                    value='ownership'
                    label='I take ownership of my department. If something breaks, I find a solution before telling my boss.'
                  />
                  <RadioCard
                    name='workApproach'
                    value='team-first'
                    label='I focus on making sure my team is happy, even if it means bending the rules occasionally.'
                  />
                </div>
              </div>

              <div className='grid grid-cols-2 gap-6'>
                <SelectField
                  label='How many people have you supervised directly?'
                  name='supervisedCount'
                >
                  <option value=''>None</option>
                  <option value='1-5'>1-5</option>
                  <option value='6-10'>6-10</option>
                  <option value='10+'>10+</option>
                </SelectField>

                <SelectField
                  label='Biggest Problem in Hospitality?'
                  name='biggestProblem'
                >
                  <option value=''>Staff Theft & Dishonesty</option>
                  <option value='turnover'>High Staff Turnover</option>
                  <option value='guest'>Guest Complaints</option>
                </SelectField>
              </div>
            </SectionCard>

            <SectionCard title={{ number: 4, text: 'Commitment & Motivation' }}>
              <div className='bg-[#e0ecff] border border-[#c7dbff] rounded-md px-4 py-3 text-[13px] text-[#1e3a8a]'>
                <label className='flex items-start gap-2 cursor-pointer'>
                  <input
                    type='checkbox'
                    name='scheduleConfirmed'
                    className='mt-[3px]'
                  />
                  Schedule: This cohort runs for 6 weeks (2 weeks intensive
                  physical + 4 weeks remote execution).
                </label>
              </div>

              <div className='space-y-3'>
                <p className='text-[12px] font-medium text-[#374151]'>
                  Are you open to deployment (relocation for work)?
                </p>

                <div className='flex gap-6'>
                  <RadioInline
                    name='relocation'
                    value='anywhere'
                    label='Yes, anywhere in Nigeria'
                  />
                  <RadioInline
                    name='relocation'
                    value='specific'
                    label='Yes, but only specific cities'
                  />
                  <RadioInline
                    name='relocation'
                    value='local'
                    label='No, strictly local'
                  />
                </div>
              </div>

              <TextAreaField
                label='Why do you want to join this specific cohort? (Be honest. We read every word.)'
                name='motivation'
                placeholder='I believe I have the potential to lead, but I lack the formal structure...'
              />

              <SelectField
                label='Primary Career Goal (Next 2 Years)'
                name='careerGoal'
              >
                <option value=''>Become a General Manager</option>
                <option value='ops'>Head of Operations</option>
              </SelectField>

              <div className='space-y-2'>
                <p className='text-[12px] font-medium text-[#374151]'>
                  Accountability Pledge
                </p>

                <p className='text-[11px] text-[#6b7280]'>
                  "I understand that Open Edge training is rigorous. If
                  admitted, I agree to be held to the highest professional
                  standards during the programme."
                </p>

                <div className='flex gap-6 mt-2'>
                  <RadioInline
                    name='accountability'
                    value='yes'
                    label='Yes, I agree'
                  />
                  <RadioInline name='accountability' value='no' label='No' />
                  <RadioInline
                    name='accountability'
                    value='not-sure'
                    label='Not sure'
                  />
                </div>
              </div>
            </SectionCard>

            <button
              type='submit'
              className='w-full mt-6 bg-[#1e3a8a] text-white py-4 rounded-lg text-[15px] font-semibold shadow-md'
            >
              Apply to Join the Cohort →
            </button>

            <p className='text-center text-[11px] text-[#6b7280] mt-3'>
              By clicking apply, you agree to our privacy policy regarding data
              collection for recruitment purposes.
            </p>
          </Form>
        </Formik>

        <SidebarCard />
      </div>
    </div>
  );
}
