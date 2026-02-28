import { Formik, Form } from 'formik';
import { applicationSchema } from '@/validation/applicationSchema';
import { submitToGoogleSheets } from '@/utils/googleSheetsApi';
import { trackFormSubmission } from '@/utils/analytics';
import SectionCard from './SectionCard';
import SidebarCard from './SidebarCard';
import InputField from './InputField';
import SelectField from './SelectField';
import CheckboxCard from './CheckboxCard';
import RadioCard from './RadioCard';
import TextAreaField from './TextAreaField';
import TrainingSuccessModal from './TrainingSuccessModal';
import { useState } from 'react';

export default function ApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (
    values: Record<string, unknown>,
    { resetForm }: any,
  ) => {
    setIsSubmitting(true);
    setSubmitError(null);

    const result = await submitToGoogleSheets('Training Application', values);

    // Track in Google Analytics
    if (result.success) {
      trackFormSubmission('Training Application');
      setShowSuccessModal(true);
      resetForm(); // Clear the form
    } else {
      setSubmitError(
        result.message || 'Something went wrong. Please try again.',
      );
    }

    setIsSubmitting(false);
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <div className='bg-[#f3f4f6] min-h-screen py-10 px-6'>
      {/* Success Modal */}
      <TrainingSuccessModal
        isOpen={showSuccessModal}
        onClose={handleCloseModal}
      />

      <div className='max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-[2.1fr_1fr] gap-8'>
        {/* Error Message */}
        {submitError && (
          <div className='lg:col-span-2 p-6 rounded-xl shadow-lg border-2 mb-6 bg-red-50 text-red-900 border-red-200'>
            <div className='flex items-start gap-3'>
              <span className='text-2xl'>❌</span>
              <div>
                <h3 className='font-bold text-lg mb-1'>Submission Failed</h3>
                <p>{submitError}</p>
              </div>
            </div>
          </div>
        )}
        <Formik
          initialValues={{
            fullName: '',
            phoneNumber: '',
            email: '',
            currentCity: '',
            targetRole: '',
            currentSituation: '',
            yearsExperience: '',
            hospitalityBusinessTypes: [],
            workApproach: '',
            supervisionExperience: '',
            biggestProblem: '',
            commitSchedule: '',
            deploymentWillingness: '',
            whyJoinOpenEdge: '',
            lookingFor: '',
            accountability: '',
          }}
          validationSchema={applicationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className='space-y-8'>
              {/* Questions 1-3: Basic Information */}
              <SectionCard title={{ number: 1, text: 'Basic Information' }}>
                <InputField
                  label='Full Name'
                  name='fullName'
                  placeholder='Enter your full name'
                />

                <InputField
                  label='Phone Number (WhatsApp enabled)'
                  name='phoneNumber'
                  placeholder='+234 800 000 0000'
                />

                <InputField
                  label='Email Address'
                  name='email'
                  placeholder='your.email@example.com'
                />
              </SectionCard>

              {/* Question 4: Current City */}
              <SectionCard title={{ number: 4, text: 'Location' }}>
                <SelectField label='Current City' name='currentCity'>
                  <option value=''>Select your city...</option>
                  <option value='Lagos'>Lagos</option>
                  <option value='Abuja'>Abuja</option>
                  <option value='Port Harcourt'>Port Harcourt</option>
                  <option value='Ibadan'>Ibadan</option>
                  <option value='Benin'>Benin</option>
                  <option value='Warri'>Warri</option>
                  <option value='Asaba'>Asaba</option>
                  <option value='Other'>Other (specify)</option>
                </SelectField>
              </SectionCard>

              {/* Question 5: Role Applying For */}
              <SectionCard title={{ number: 5, text: 'Role Application' }}>
                <div className='space-y-3'>
                  <p className='text-[13px] font-medium text-[#374151]'>
                    Which role are you applying to be trained for?
                  </p>
                  <p className='text-[12px] text-[#6b7280]'>
                    Note: Training is role-specific. Choose the role you are
                    most capable of performing.
                  </p>

                  <div className='space-y-3'>
                    <RadioCard
                      name='targetRole'
                      value='Head of Operations'
                      label='Head of Operations'
                    />
                    <RadioCard
                      name='targetRole'
                      value='Housekeeping Supervisor'
                      label='Housekeeping Supervisor'
                    />
                    <RadioCard
                      name='targetRole'
                      value='Front Office Supervisor'
                      label='Front Office Supervisor'
                    />
                    <RadioCard
                      name='targetRole'
                      value='Facility and Maintenance Supervisor'
                      label='Facility and Maintenance Supervisor'
                    />
                    <RadioCard
                      name='targetRole'
                      value='Cost Control Officer'
                      label='Cost Control Officer'
                    />
                  </div>
                </div>
              </SectionCard>

              {/* Question 6: Current Situation */}
              <SectionCard title={{ number: 6, text: 'Current Situation' }}>
                <div className='space-y-3'>
                  <p className='text-[13px] font-medium text-[#374151]'>
                    What best describes your current situation?
                  </p>

                  <div className='space-y-3'>
                    <RadioCard
                      name='currentSituation'
                      value='Currently working in a hospitality business'
                      label='Currently working in a hospitality business'
                    />
                    <RadioCard
                      name='currentSituation'
                      value='Previously worked in hospitality, currently between roles'
                      label='Previously worked in hospitality, currently between roles'
                    />
                    <RadioCard
                      name='currentSituation'
                      value='Currently supervising others in hospitality'
                      label='Currently supervising others in hospitality'
                    />
                    <RadioCard
                      name='currentSituation'
                      value='Owner/operator seeking structured operational training'
                      label='Owner/operator seeking structured operational training'
                    />
                    <RadioCard
                      name='currentSituation'
                      value='Looking to transition into hospitality operations'
                      label='Looking to transition into hospitality operations'
                    />
                  </div>
                </div>
              </SectionCard>

              {/* Question 7: Years of Experience */}
              <SectionCard title={{ number: 7, text: 'Experience' }}>
                <SelectField
                  label='How many years of hands-on hospitality experience do you have?'
                  name='yearsExperience'
                >
                  <option value=''>Select...</option>
                  <option value='Less than 1 year'>Less than 1 year</option>
                  <option value='1–3 years'>1–3 years</option>
                  <option value='3–5 years'>3–5 years</option>
                  <option value='5–10 years'>5–10 years</option>
                  <option value='10+ years'>10+ years</option>
                </SelectField>
              </SectionCard>

              {/* Question 8: Business Types */}
              <SectionCard title={{ number: 8, text: 'Business Types' }}>
                <div className='space-y-3'>
                  <p className='text-[13px] font-medium text-[#374151]'>
                    What type of hospitality business have you worked in most?
                    (multi-select)
                  </p>

                  <div className='grid grid-cols-2 gap-4'>
                    <CheckboxCard
                      name='hospitalityBusinessTypes'
                      value='Hotel'
                      label='Hotel'
                    />
                    <CheckboxCard
                      name='hospitalityBusinessTypes'
                      value='Short-stay / serviced apartments'
                      label='Short-stay / serviced apartments'
                    />
                    <CheckboxCard
                      name='hospitalityBusinessTypes'
                      value='Restaurant / lounge'
                      label='Restaurant / lounge'
                    />
                    <CheckboxCard
                      name='hospitalityBusinessTypes'
                      value='Event venue'
                      label='Event venue'
                    />
                    <CheckboxCard
                      name='hospitalityBusinessTypes'
                      value='Mixed-use hospitality'
                      label='Mixed-use hospitality'
                    />
                    <CheckboxCard
                      name='hospitalityBusinessTypes'
                      value='None yet'
                      label='None yet'
                    />
                  </div>
                </div>
              </SectionCard>

              {/* Question 9: Work Approach */}
              <SectionCard title={{ number: 9, text: 'Work Approach' }}>
                <div className='space-y-3'>
                  <p className='text-[13px] font-medium text-[#374151]'>
                    Which statement best describes how you approach your work?
                  </p>

                  <div className='space-y-3'>
                    <RadioCard
                      name='workApproach'
                      value='I follow instructions and do my part well'
                      label='I follow instructions and do my part well'
                    />
                    <RadioCard
                      name='workApproach'
                      value='I take ownership of outcomes, not just tasks'
                      label='I take ownership of outcomes, not just tasks'
                    />
                    <RadioCard
                      name='workApproach'
                      value="I solve problems even when it's not my job"
                      label="I solve problems even when it's not my job"
                    />
                    <RadioCard
                      name='workApproach'
                      value='I want to grow into senior operational leadership'
                      label='I want to grow into senior operational leadership'
                    />
                    <RadioCard
                      name='workApproach'
                      value='I just need any opportunity right now'
                      label='I just need any opportunity right now'
                    />
                  </div>
                </div>
              </SectionCard>

              {/* Question 10: Supervision Experience */}
              <SectionCard
                title={{ number: 10, text: 'Supervision Experience' }}
              >
                <div className='space-y-3'>
                  <p className='text-[13px] font-medium text-[#374151]'>
                    Have you ever been responsible for supervising people or
                    processes?
                  </p>

                  <div className='space-y-3'>
                    <RadioCard
                      name='supervisionExperience'
                      value='Yes, people and processes'
                      label='Yes, people and processes'
                    />
                    <RadioCard
                      name='supervisionExperience'
                      value='Yes, people only'
                      label='Yes, people only'
                    />
                    <RadioCard
                      name='supervisionExperience'
                      value='Yes, processes only'
                      label='Yes, processes only'
                    />
                    <RadioCard
                      name='supervisionExperience'
                      value="No, but I'm ready to learn"
                      label="No, but I'm ready to learn"
                    />
                  </div>
                </div>
              </SectionCard>

              {/* Question 11: Biggest Problem */}
              <SectionCard title={{ number: 11, text: 'Industry Insight' }}>
                <div className='space-y-3'>
                  <p className='text-[13px] font-medium text-[#374151]'>
                    What do you believe is the biggest problem in most
                    hospitality businesses today?
                  </p>

                  <div className='space-y-3'>
                    <RadioCard
                      name='biggestProblem'
                      value='Weak systems'
                      label='Weak systems'
                    />
                    <RadioCard
                      name='biggestProblem'
                      value='Poor supervision and accountability'
                      label='Poor supervision and accountability'
                    />
                    <RadioCard
                      name='biggestProblem'
                      value='Theft and revenue leakage'
                      label='Theft and revenue leakage'
                    />
                    <RadioCard
                      name='biggestProblem'
                      value='Untrained staff'
                      label='Untrained staff'
                    />
                    <RadioCard
                      name='biggestProblem'
                      value='Owners interfering too much'
                      label='Owners interfering too much'
                    />
                    <RadioCard
                      name='biggestProblem'
                      value="I'm not sure yet"
                      label="I'm not sure yet"
                    />
                  </div>
                </div>
              </SectionCard>

              {/* Question 12: Schedule Commitment */}
              <SectionCard title={{ number: 12, text: 'Commitment' }}>
                <div className='space-y-3'>
                  <p className='text-[13px] font-medium text-[#374151]'>
                    Can you commit to the full training schedule?
                  </p>

                  <div className='space-y-3'>
                    <RadioCard
                      name='commitSchedule'
                      value='Yes, fully available'
                      label='Yes, fully available'
                    />
                    <RadioCard
                      name='commitSchedule'
                      value='Yes, but with notice'
                      label='Yes, but with notice'
                    />
                    <RadioCard
                      name='commitSchedule'
                      value='No, my availability is uncertain'
                      label='No, my availability is uncertain'
                    />
                  </div>
                </div>
              </SectionCard>

              {/* Question 13: Deployment Willingness */}
              <SectionCard title={{ number: 13, text: 'Deployment' }}>
                <div className='space-y-3'>
                  <p className='text-[13px] font-medium text-[#374151]'>
                    Are you open to being deployed to a hospitality business
                    after training?
                  </p>

                  <div className='space-y-3'>
                    <RadioCard
                      name='deploymentWillingness'
                      value='Yes, immediately'
                      label='Yes, immediately'
                    />
                    <RadioCard
                      name='deploymentWillingness'
                      value='Yes, within 1–3 months'
                      label='Yes, within 1–3 months'
                    />
                    <RadioCard
                      name='deploymentWillingness'
                      value='Only if conditions are right'
                      label='Only if conditions are right'
                    />
                    <RadioCard
                      name='deploymentWillingness'
                      value='No'
                      label='No'
                    />
                  </div>
                </div>
              </SectionCard>

              {/* Question 14: Why Join Open Edge */}
              <SectionCard title={{ number: 14, text: 'Motivation' }}>
                <TextAreaField
                  label='This training is free but selective. Why do you want to join Open Edge?'
                  name='whyJoinOpenEdge'
                  placeholder='Be honest. We read every word...'
                />
              </SectionCard>

              {/* Question 15: What Are You Looking For */}
              <SectionCard title={{ number: 15, text: 'Your Goal' }}>
                <div className='space-y-3'>
                  <p className='text-[13px] font-medium text-[#374151]'>
                    Which best describes what you are looking for?
                  </p>

                  <div className='space-y-3'>
                    <RadioCard
                      name='lookingFor'
                      value='A serious career path in hospitality operations'
                      label='A serious career path in hospitality operations'
                    />
                    <RadioCard
                      name='lookingFor'
                      value='Skills to become a strong supervisor or manager'
                      label='Skills to become a strong supervisor or manager'
                    />
                    <RadioCard
                      name='lookingFor'
                      value='Exposure and placement in a well-run business'
                      label='Exposure and placement in a well-run business'
                    />
                    <RadioCard
                      name='lookingFor'
                      value='Any opportunity available'
                      label='Any opportunity available'
                    />
                  </div>
                </div>
              </SectionCard>

              {/* Question 16: Accountability */}
              <SectionCard
                title={{ number: 16, text: 'Accountability Agreement' }}
              >
                <div className='space-y-3'>
                  <p className='text-[13px] font-medium text-[#374151]'>
                    Are you willing to be held accountable to Open Edge
                    hospitality standards, systems, and performance?
                  </p>

                  <div className='space-y-3'>
                    <RadioCard name='accountability' value='Yes' label='Yes' />
                    <RadioCard
                      name='accountability'
                      value='Not sure'
                      label='Not sure'
                    />
                    <RadioCard name='accountability' value='No' label='No' />
                  </div>
                </div>
              </SectionCard>

              {/* Validation Errors Display */}
              {Object.keys(errors).length > 0 &&
                Object.keys(touched).length > 0 && (
                  <div className='bg-red-50 border-2 border-red-200 rounded-xl p-6 mt-6'>
                    <h4 className='text-[14px] font-bold text-red-900 mb-3'>
                      ⚠️ Please complete the following fields:
                    </h4>
                    <ul className='space-y-1 text-[13px] text-red-800'>
                      {Object.entries(errors).map(([field, error]) => (
                        <li key={field} className='flex items-start gap-2'>
                          <span className='text-red-600 mt-0.5'>•</span>
                          <span>{String(error)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              {/* Submit Button */}
              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full mt-6 bg-[#1e3a8a] text-white py-4 rounded-full text-[15px] font-bold shadow-lg hover:shadow-xl hover:bg-[#1e40af] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {isSubmitting ? 'Submitting...' : 'Apply to Join the Cohort'}
              </button>

              {/* What Happens Next */}
              <div className='bg-blue-50 border border-blue-200 rounded-xl p-6 mt-6'>
                <h4 className='text-[14px] font-bold text-[#1e3a8a] mb-3'>
                  What happens next:
                </h4>
                <ul className='space-y-2 text-[13px] text-[#374151]'>
                  <li className='flex items-start gap-2'>
                    <span className='text-blue-600 mt-0.5'>•</span>
                    <span>Applications are reviewed weekly</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-blue-600 mt-0.5'>•</span>
                    <span>
                      Shortlisted candidates will be contacted for a screening
                      call
                    </span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-blue-600 mt-0.5'>•</span>
                    <span>
                      Only qualified applicants are admitted into each cohort
                    </span>
                  </li>
                </ul>
              </div>
            </Form>
          )}
        </Formik>

        <SidebarCard />
      </div>
    </div>
  );
}
