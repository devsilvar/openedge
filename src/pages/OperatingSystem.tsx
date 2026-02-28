import React from 'react';
import {
  Hero,
  LocalRealitySection,
  HowWeWork,
  LimitedOwnersSection,
  ChoosePathSection,
} from '@/components/index';
import { duborLogo } from '@/assets';

const OperatingSystem: React.FC = () => {
  return (
    <>
      <Hero
        title="Our solution isn't theory or imported hospitality jargon."
        subtitle='It is a practical operating system proven to start up or reposition hospitality businesses for profit after 90 intense days.'
        description='We Fix Systems, Align Teams, and Make Your Business Profitable and Transferable Legacy.'
        heroImage={duborLogo}
        primaryBtnText='Book Health Check'
        secondaryBtnText='Join Training Program'
        primaryLink='/book-health-check'
        secondaryLink='/training'
      />
      <LocalRealitySection />
      <HowWeWork />
      <LimitedOwnersSection />
      <ChoosePathSection />
    </>
  );
};

export default OperatingSystem;
