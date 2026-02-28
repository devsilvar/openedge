import React from 'react';
import { ContactSection } from '@/components/index';
import ContactBottom from '@/components/ContactBottom';
import CTASection from '@/components/CTASection';

const Contact: React.FC = () => {
  return (
    <div className='min-h-screen bg-white'>
      {/* Contact form and content */}
      <ContactSection />

      {/* Map Section - matching contactBottom.png design */}
      <ContactBottom />

      {/* CTA Section at bottom - matching ctacontact.png design */}
      <CTASection
        variant="dark"
        title="Ready to fix your business?"
        description="If you are a serious owner ready for structural change, let's talk."
        primaryButtonText="Book a Consultation"
        secondaryButtonText="View Our Services"
        primaryButtonAction={() => {
          window.location.href = '/book-health-check';
        }}
        secondaryButtonAction={() => {
          window.location.href = '/operating-system';
        }}
        backgroundColor="bg-[#0f2744]"
      />
    </div>
  );
};

export default Contact;
