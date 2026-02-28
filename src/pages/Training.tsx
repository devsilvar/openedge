import React from 'react';
import {
  AdmissionCriteriaSection,
  TrainningHero,
  BridgeSection,
  TrainingSection,
  RolesSection,
  ValuePropositionSection,
  SelectionSection,
  CtaTrainSection,
} from '@/components/index';
import { duborLogo } from '@/assets';

const Training: React.FC = () => {
  return (
    <div className='min-h-screen bg-white'>
      <TrainningHero heroImage={duborLogo} />
      <AdmissionCriteriaSection />
      <BridgeSection />
      <TrainingSection />
      <RolesSection />
      <ValuePropositionSection />
      <SelectionSection />
      <CtaTrainSection />
    </div>
  );
};

export default Training;
