import React from 'react';
import Hero from '@/components/Hero';
import ChallengeSection from '@/components/ChallengeSection';
import SolutionSection from '@/components/SolutionSection';
import {
  WhoWeServeSection,
  PortfolioSection,
  CTASection,
} from '@/components/index';
import { heroLogoVideo } from '@/assets';

const Home: React.FC = () => {
  return (
    <div className='min-h-screen bg-white '>
      <Hero
        title={
          <>
            We fix hospitality businesses so owners can
            <span className='text-primary '>
              {' '}
              build wealth and leave a lasting legacy,{' '}
            </span>
            while staff grow their careers.{' '}
          </>
        }
        subtitle='Open Edge fixes the system and middle-management failures in hospitality businesses.'
        description='We help hospitality owners in Nigeria move from chaos and build wealth from their 
investment. We align systems, middle management, and operations so businesses become 
profitable, sustainable, and last beyond the owner.'
        primaryBtnText='Book Health Check'
        secondaryBtnText='Join Training Program'
        overlayText='TRUSTED BY 50+ HOTELS, RESTAURANTS AND RESORTS NATIONWIDE'
        primaryLink='/book-health-check'
        secondaryLink='/training'
        heroVideo={heroLogoVideo}
      />
      {/* Then show the problem/solution */}
      <ChallengeSection />
      <SolutionSection />
      <WhoWeServeSection />
      <PortfolioSection />
      <CTASection />
    </div>
  );
};

export default Home;
