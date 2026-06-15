import SectionHeader from './SectionHeader.jsx';
import StepCard from './StepCard.jsx';

const steps = [
  {
    title: 'Enter Preferences',
    description:
      'Tell us your destination, travel dates, budget, and eco-friendly interests so we understand what matters most to you.',
  },
  {
    title: 'Generate Itinerary',
    description:
      'Our AI builds a personalized day-by-day plan with sustainable routes, activities, and accommodations tailored to your style.',
  },
  {
    title: 'Explore Eco Tourism',
    description:
      'Discover responsible travel experiences, support local communities, and embark on adventures with a lighter environmental footprint.',
  },
];

function HowItWorks() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-6xl min-w-0">
        <SectionHeader
          title="How It Works"
          subtitle="Three simple steps from inspiration to a fully planned eco-friendly adventure."
        />
        <div className="mt-12 grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <StepCard
              key={step.title}
              step={index + 1}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
