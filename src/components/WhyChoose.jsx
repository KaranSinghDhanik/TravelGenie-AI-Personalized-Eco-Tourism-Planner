import {
  Sparkles,
  Home,
  Wallet,
  Map,
} from 'lucide-react';
import SectionHeader from './SectionHeader.jsx';
import Card from './Card.jsx';

const features = [
  {
    title: 'AI Trip Planner',
    description:
      'Describe your dream trip and let AI craft day-by-day itineraries tailored to your interests, pace, and eco preferences.',
    icon: <Sparkles className="h-6 w-6" />,
  },
  {
    title: 'Smart Homestay Finder',
    description:
      'Discover authentic, community-run homestays that immerse you in local culture while supporting families directly.',
    icon: <Home className="h-6 w-6" />,
  },
  {
    title: 'Budget Optimizer',
    description:
      'Get intelligent cost breakdowns and compare sustainable options so you travel confidently without overspending.',
    icon: <Wallet className="h-6 w-6" />,
  },
  {
    title: 'Personalized Itinerary',
    description:
      'Receive curated routes, activities, and hidden gems designed uniquely for you — updated as your plans evolve.',
    icon: <Map className="h-6 w-6" />,
  },
];

function WhyChoose() {
  return (
    <section
      id="features"
      className="bg-gray-50 px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28 dark:bg-gray-950"
    >
      <div className="mx-auto w-full max-w-6xl min-w-0">
        <SectionHeader
          title="Everything you need to travel smarter"
          subtitle="Powerful AI tools designed for mindful explorers who want unforgettable adventures without the planning stress."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {features.map((feature) => (
            <Card
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
