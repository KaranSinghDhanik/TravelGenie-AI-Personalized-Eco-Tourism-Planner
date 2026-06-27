import { ChevronDown } from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import StepCard from './StepCard.jsx';

const steps = [
  {
    step: 1,
    description:
      'Tell us your destination and travel preferences.',
  },
  {
    step: 2,
    description: 'AI generates a personalized itinerary.',
  },
  {
    step: 3,
    description:
      'Save your trip and explore recommended homestays.',
  },
];

function TimelineConnector() {
  return (
    <div className="flex justify-center py-2" aria-hidden="true">
      <ChevronDown className="h-6 w-6 text-emerald-400 dark:text-emerald-500" />
    </div>
  );
}

function HowItWorks() {
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto w-full max-w-3xl min-w-0">
        <SectionHeader
          title="How It Works"
          subtitle="From inspiration to a fully planned adventure in three simple steps."
        />
        <div className="mt-14">
          {steps.map((step, index) => (
            <div key={step.step}>
              <StepCard step={step.step} description={step.description} />
              {index < steps.length - 1 && <TimelineConnector />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
