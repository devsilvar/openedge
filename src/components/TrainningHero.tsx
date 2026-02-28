import Hero from './Hero';

interface TrainningHeroProps {
  heroImage?: string;
}

export default function TrainingHero({ heroImage }: TrainningHeroProps) {
  return (
    <Hero
      title={
        <>
          We Don't Only Fix Systems.
          <br />
          We Develop Operational Leaders
          <br />
          Who Can Run Hospitality{' '}
          <span className='text-[var(--color-brandBlue)]'>Properly.</span>
        </>
      }
      eyebrowText='Leadership Development Program'
      subtitle='Open Edge trains and deploys critical middle-management and operational talent to ensure hospitality businesses work efficiently and profitably.'
      primaryBtnText='Proceed to Application Form'
      secondaryBtnText='Who Is This For?'
      primaryLink='/training-form'
      secondaryLink='#admission-criteria'
      heroImage={heroImage}
    />
  );
}
