import React from 'react';
import {
  Hero,
  WhyOpenEdgeSection,
  OpenEdgeSection,
  HowWeThinkSection,
  ExperinceSection,
  PartnerSection,
  TrustSection,
  CTASection,
} from '@/components/index';
import { duborLogo } from '@/assets';

const About: React.FC = () => {
  return (
    <>
      <div className='min-h-screen bg-white '>
        <Hero
          title='A different kind of hospitality firm built for owners who want their businesses to work and professionals who want to grow.'
          description='Open Edge is a hospitality solutions firm that fixes the system and middle-management failures holding hospitality businesses back. We help hospitality owners build real wealth and a lasting legacy from their investments while developing operational leaders who can run hospitality businesses properly.'
          heroImage={duborLogo}
          imageAlt='Dubor Logo'
        />
      </div>
      <WhyOpenEdgeSection />
      <OpenEdgeSection />
      <HowWeThinkSection />
      <ExperinceSection />
      <PartnerSection />
      <TrustSection />
      <CTASection
        variant='dark'
        title='Ready to fix your business?'
        description="If you are a serious owner ready for structural change, let's talk."
        primaryButtonText='Book a Consultation'
        secondaryButtonText='View Our Services'
        primaryButtonAction={() => {
          // Navigate to booking or open calendar
          window.location.href = '/book-health-check';
        }}
        secondaryButtonAction={() => {
          // Navigate to services/operating-system
          window.location.href = '/operating-system';
        }}
        backgroundColor='bg-[#0f2744]'
      />
    </>
  );
};

export default About;
