export default function SidebarCard() {
  return (
    <div className='bg-white border border-[#e5e7eb] rounded-lg p-6 space-y-6'>
      <h3 className='text-[15px] font-semibold text-[#1f2937]'>
        What happens next?
      </h3>

      <div className='space-y-5 text-[13px] text-[#374151]'>
        <div>
          <p className='font-semibold text-[12px] mb-1'>WEEKLY REVIEW</p>
          <p>
            Applications are reviewed every Friday. You will receive an email
            confirmation immediately after submission.
          </p>
        </div>

        <div>
          <p className='font-semibold text-[12px] mb-1'>SCREENING CALL</p>
          <p>
            Shortlisted candidates are invited for a 20-minute video interview
            to assess mindset and availability.
          </p>
        </div>

        <div>
          <p className='font-semibold text-[12px] mb-1'>ADMISSION OFFER</p>
          <p>
            Successful applicants receive an offer letter and payment details
            for the cohort fee.
          </p>
        </div>

        <div className='pt-4 border-t border-[#e5e7eb]'>
          <p className='font-semibold text-[12px]'>NEED HELP?</p>
          <p className='text-[#2563eb]'>admissions@oneedge.ng</p>
        </div>
      </div>
    </div>
  );
}
