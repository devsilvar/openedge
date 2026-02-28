import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import { submitToGoogleSheets } from '@/utils/googleSheetsApi';
import { trackFormSubmission } from '@/utils/analytics';
import StepHeader from './StepHeader';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import RadioCard from './RadioCard';
import CheckboxCard from './CheckBoxCard';
import SidebarInfo from './SideBarInfo';
import SubmitSection from './SubmitSection';
import SuccessModal from './SuccessModal';

const schema = yup.object({
  fullName: yup.string().required('Full Name is required'),
  businessName: yup.string().required('Business Name is required'),
  businessType: yup.string().required('Business Type is required'),
  location: yup.string().required('Location is required'),
  phoneNumber: yup.string().required('Phone Number is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  yearsInOperation: yup.string().required('Years in Operation is required'),
  staffSize: yup.string().required('Staff Size is required'),
  total12MonthRevenue: yup
    .string()
    .required('Total 12-Month Revenue is required'),
  lastMonthRevenue: yup.string().required("Last Month's Revenue is required"),
  monthlyProfitClarity: yup
    .string()
    .required('Monthly Profit Clarity is required'),
  operationalChallenges: yup
    .array()
    .of(yup.string())
    .min(1, 'Select at least one operational challenge')
    .required(),
  losingValueAreas: yup
    .array()
    .of(yup.string())
    .min(1, 'Select at least one area where you are losing value')
    .required(),
});

type FormData = yup.InferType<typeof schema>;

export default function HealthCheckWrapper() {
  const { register, handleSubmit, control, setValue, reset } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsSubmitting(true);
    setSubmitError(null);

    const result = await submitToGoogleSheets('Health Check', data);
    
    // Track in Google Analytics
    if (result.success) {
      trackFormSubmission('Health Check');
      setShowSuccessModal(true);
      reset(); // Clear the form
    } else {
      setSubmitError(result.message || 'Something went wrong. Please try again.');
    }
    
    setIsSubmitting(false);
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <section className='bg-[var(--color-bg)] py-10'>
      {/* Success Modal */}
      <SuccessModal isOpen={showSuccessModal} onClose={handleCloseModal} />

      {/* Error Message */}
      {submitError && (
        <div className='max-w-[800px] mx-auto mb-6 p-6 rounded-xl shadow-lg border-2 bg-red-50 text-red-900 border-red-200'>
          <div className='flex items-start gap-3'>
            <span className='text-2xl'>❌</span>
            <div>
              <h3 className='font-bold text-lg mb-1'>
                Submission Failed
              </h3>
              <p>{submitError}</p>
            </div>
          </div>
        </div>
      )}

      <div
        className='mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-6'
        style={{ maxWidth: 'var(--container-big)' }}
      >
        {/* LEFT COLUMN */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='lg:col-span-2 bg-white border border-[var(--color-border-light)] rounded-lg p-8 space-y-10'
        >
          {/* STEP 01 */}
          <div className='space-y-6'>
            <StepHeader step='STEP 01' title='Business Owner Information' />

            <div className='grid md:grid-cols-2 gap-6'>
              <FormInput
                label='Full Name'
                placeholder='John Doe'
                register={register('fullName')}
              />
              <FormInput
                label='Business Name'
                placeholder='Azure Blue Hotel'
                register={register('businessName')}
              />
              <FormSelect
                label='Business Type'
                placeholder='Select Business Type'
                name='businessType'
                register={register('businessType')}
                options={['Hotel', 'Short-let', 'Event Centre', 'Restaurant', 'Resort', 'Wellness']}
              />
              <FormSelect
                label='Location (State)'
                placeholder='Select State'
                name='location'
                register={register('location')}
                options={['Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara']}
              />
              <FormInput
                label='Phone Number (WhatsApp)'
                placeholder='+234 801 234 5678'
                register={register('phoneNumber')}
              />
              <FormInput
                label='Email Address'
                placeholder='john@hospitality.ng'
                register={register('email')}
              />
            </div>
          </div>

          {/* STEP 02 */}
          <div className='space-y-6'>
            <StepHeader step='STEP 02' title='Business Overview' />

            <div className='grid md:grid-cols-2 gap-6'>
              <FormSelect
                label='Years in Operation'
                placeholder='Select duration'
                name='yearsInOperation'
                register={register('yearsInOperation')}
                options={['Less than 1 year', '1-2 years', '3-5 years', '6-10 years', 'More than 10 years']}
              />
              <FormSelect
                label='Approximate Staff Size'
                placeholder='Select size'
                name='staffSize'
                register={register('staffSize')}
                options={['1-5 staff', '6-10 staff', '11-20 staff', '21-50 staff', 'More than 50 staff']}
              />
            </div>

            <div className='space-y-4'>
              <p className='text-sm font-medium text-[var(--color-heading)]'>
                Approximately how much revenue did the business generate in the last 12 months?
              </p>

              <div className='grid md:grid-cols-3 gap-4'>
                {[
                  { value: 'Below ₦50 Million', label: 'Below ₦50M' },
                  { value: '₦50M – ₦100M', label: '₦50M – ₦100M' },
                  { value: '₦100M – ₦250M', label: '₦100M – ₦250M' },
                  { value: '₦250M – ₦500M', label: '₦250M – ₦500M' },
                  { value: '₦500M – ₦1B', label: '₦500M – ₦1B' },
                  { value: 'Above ₦1B', label: 'Above ₦1B' },
                  { value: 'I am not sure', label: 'I am not sure' },
                ].map((opt) => (
                  <RadioCard
                    key={opt.value}
                    name='total12MonthRevenue'
                    value={opt.value}
                    label={opt.label}
                    register={register}
                  />
                ))}
              </div>
            </div>

            <div className='space-y-4'>
              <p className='text-sm font-medium text-[var(--color-heading)]'>
                Approximately how much revenue did the business generate in the last month?
              </p>

              <div className='grid md:grid-cols-3 gap-4'>
                {[
                  { value: 'Below ₦5Million', label: 'Below ₦5M' },
                  { value: '₦5M – ₦20M', label: '₦5M – ₦20M' },
                  { value: '₦20M – ₦50M', label: '₦20M – ₦50M' },
                  { value: '₦50M – ₦100M', label: '₦50M – ₦100M' },
                  { value: '₦100M – ₦200M', label: '₦100M – ₦200M' },
                  { value: 'Above ₦200M', label: 'Above ₦200M' },
                  { value: 'I am not sure', label: 'I am not sure' },
                ].map((opt) => (
                  <RadioCard
                    key={opt.value}
                    name='lastMonthRevenue'
                    value={opt.value}
                    label={opt.label}
                    register={register}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* STEP 03 */}
          <div className='space-y-6'>
            <StepHeader step='STEP 03' title='Profit & Challenges' />

            <div className='space-y-4'>
              <p className='text-sm font-medium text-[var(--color-heading)]'>
                At the end of a typical month, can you clearly tell how much profit the business made?
              </p>

              <div className='grid md:grid-cols-2 gap-4'>
                {[
                  {
                    value: 'Yes, clearly',
                    label: 'Yes, clearly',
                  },
                  {
                    value: 'Roughly, but not confidently',
                    label: 'Roughly, but not confidently',
                  },
                  {
                    value: 'No, I usually can\'t tell',
                    label: 'No, I usually can\'t tell',
                  },
                  {
                    value: 'I rely on estimates or the bank balance',
                    label: 'I rely on estimates or the bank balance',
                  },
                  {
                    value: 'I only find out sometimes',
                    label: 'I only find out sometimes',
                  },
                ].map((opt) => (
                  <RadioCard
                    key={opt.value}
                    name='monthlyProfitClarity'
                    value={opt.value}
                    label={opt.label}
                    register={register}
                  />
                ))}
              </div>
            </div>

            <div className='space-y-4'>
              <p className='text-sm font-medium text-[var(--color-heading)]'>
                What is your biggest operational challenge today? (Select all that apply)
              </p>

              <div className='space-y-3'>
                {[
                  {
                    value: 'The business depends too much on me',
                    label: 'The business depends too much on me',
                  },
                  {
                    value: 'Middle management is weak or unreliable',
                    label: 'Middle management is weak or unreliable',
                  },
                  {
                    value: 'Staff don\'t follow processes consistently',
                    label: 'Staff don\'t follow processes consistently',
                  },
                  {
                    value: 'Revenue comes in, but profit is unclear',
                    label: 'Revenue comes in, but profit is unclear',
                  },
                  {
                    value: 'Not enough revenue. Sales is poor',
                    label: 'Not enough revenue. Sales is poor',
                  },
                  {
                    value: 'Too many issues happen daily',
                    label: 'Too many issues happen daily',
                  },
                  {
                    value: 'Poor reporting and lack of supervision',
                    label: 'Poor reporting and lack of supervision',
                  },
                  {
                    value: 'High staff turnover',
                    label: 'High staff turnover',
                  },
                  {
                    value: 'Theft, wastage, or revenue leakage',
                    label: 'Theft, wastage, or revenue leakage',
                  },
                  {
                    value: 'Service quality is inconsistent',
                    label: 'Service quality is inconsistent',
                  },
                  {
                    value: 'We have grown, but operations haven\'t caught up',
                    label: 'We have grown, but operations haven\'t caught up',
                  },
                  {
                    value: 'I am not sure. Things just feel disorganized',
                    label: 'I am not sure. Things just feel disorganized',
                  },
                ].map((opt) => (
                  <CheckboxCard
                    key={opt.value}
                    name='operationalChallenges'
                    value={opt.value}
                    label={opt.label}
                    control={control}
                    setValue={setValue}
                  />
                ))}
              </div>
            </div>

            <div className='space-y-4'>
              <p className='text-sm font-medium text-[var(--color-heading)]'>
                Where do you feel you are losing the most value? (Select all that apply)
              </p>

              <div className='space-y-3'>
                {[
                  {
                    value: 'Poor controls and weak accountability',
                    label: 'Poor controls and weak accountability',
                  },
                  {
                    value: 'Theft, wastage, or untracked expenses',
                    label: 'Theft, wastage, or untracked expenses',
                  },
                  {
                    value: 'Inefficient staff and poor supervision',
                    label: 'Inefficient staff and poor supervision',
                  },
                  {
                    value: 'My time and energy as owner',
                    label: 'My time and energy as owner',
                  },
                  {
                    value: 'Missed revenue opportunities',
                    label: 'Missed revenue opportunities',
                  },
                  {
                    value: 'Poor guest experience leading to repeat losses',
                    label: 'Poor guest experience leading to repeat losses',
                  },
                  {
                    value: 'Poor procurement and vendor management',
                    label: 'Poor procurement and vendor management',
                  },
                  {
                    value: 'Training gaps and constant retraining',
                    label: 'Training gaps and constant retraining',
                  },
                  {
                    value: 'Bad decisions due to lack of accurate information',
                    label: 'Bad decisions due to lack of accurate information',
                  },
                  {
                    value: 'I can\'t clearly tell where the loss is',
                    label: 'I can\'t clearly tell where the loss is',
                  },
                ].map((opt) => (
                  <CheckboxCard
                    key={opt.value}
                    name='losingValueAreas'
                    value={opt.value}
                    label={opt.label}
                    control={control}
                    setValue={setValue}
                  />
                ))}
              </div>
            </div>
          </div>

          <SubmitSection isSubmitting={isSubmitting} />
        </form>

        {/* SIDEBAR */}
        <SidebarInfo />
      </div>
    </section>
  );
}
