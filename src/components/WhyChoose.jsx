import SectionHeader from './SectionHeader.jsx';
import Card from './Card.jsx';

const reasons = [
  {
    title: 'AI Travel Planning',
    description:
      'Intelligent algorithms craft personalized itineraries that match your pace, interests, and commitment to sustainable travel.',
  },
  {
    title: 'Budget Estimation',
    description:
      'Get clear cost breakdowns and compare eco-friendly options so you can plan confidently without overspending.',
  },
  {
    title: 'Homestay Discovery',
    description:
      'Find authentic, community-run homestays that immerse you in local culture while supporting families directly.',
  },
  {
    title: 'Local Experience Recommendations',
    description:
      'Uncover hidden gems, cultural events, and off-the-beaten-path activities curated for mindful explorers.',
  },
];

function WhyChoose() {
  return (
    <section className="bg-gray-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-6xl min-w-0">
        <SectionHeader
          title="Why Choose TravelGenie AI"
          subtitle="Smart tools built for travelers who want unforgettable adventures and a positive impact on the planet."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {reasons.map((reason) => (
            <Card
              key={reason.title}
              title={reason.title}
              description={reason.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
