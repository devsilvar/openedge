import BookHealthCheckHero from '@/components/bookHealthCheck/BookHealthCheckHero';
import ProblemIndicators from '@/components/bookHealthCheck/ProblemIndicators';
import WhatYouGet from '@/components/bookHealthCheck/WhatYouGet';
import ProcessTimeline from '@/components/bookHealthCheck/ProcessTimeline';
import WhoThisIsFor from '@/components/bookHealthCheck/WhoThisIsFor';
import FinalCTA from '@/components/bookHealthCheck/FinalCTA';

export default function BookHealthCheck() {
  return (
    <div className='min-h-screen bg-white'>
      <BookHealthCheckHero />
      <ProblemIndicators />
      <WhatYouGet />
      <ProcessTimeline />
      <WhoThisIsFor />
      <FinalCTA />
    </div>
  );
}
