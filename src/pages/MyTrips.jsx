import PageLayout from '../components/PageLayout.jsx';
import PageHeader from '../components/PageHeader.jsx';
import TripCard from '../components/TripCard.jsx';

const tripSections = [
  {
    title: 'Upcoming Trips',
    trips: [
      {
        destination: 'Kerala, India',
        dates: 'Mar 15 – Mar 22, 2026',
        budget: '₹42,500',
        status: 'upcoming',
      },
      {
        destination: 'Rishikesh, India',
        dates: 'Apr 5 – Apr 10, 2026',
        budget: '₹28,000',
        status: 'upcoming',
      },
    ],
  },
  {
    title: 'Completed Trips',
    trips: [
      {
        destination: 'Goa, India',
        dates: 'Dec 20 – Dec 27, 2025',
        budget: '₹35,000',
        status: 'completed',
      },
    ],
  },
  {
    title: 'Draft Trips',
    trips: [
      {
        destination: 'Himachal Pradesh',
        dates: 'Dates not set',
        budget: '₹50,000 (est.)',
        status: 'draft',
      },
    ],
  },
  {
    title: 'Saved Trips',
    trips: [
      {
        destination: 'Rajasthan Heritage Trail',
        dates: 'Flexible dates',
        budget: '₹65,000',
        status: 'saved',
      },
      {
        destination: 'Meghalaya Rainforest',
        dates: 'Jun 2026 (planned)',
        budget: '₹38,000',
        status: 'saved',
      },
    ],
  },
];

function TripSection({ title, trips }) {
  if (trips.length === 0) return null;

  return (
    <section className="min-w-0">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
        {title}
      </h2>
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {trips.map((trip) => (
          <TripCard key={`${title}-${trip.destination}`} {...trip} />
        ))}
      </div>
    </section>
  );
}

function MyTrips() {
  return (
    <PageLayout>
      <div className="mx-auto w-full min-w-0 max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <PageHeader
          title="My Trips"
          description="Manage upcoming adventures, revisit completed journeys, and pick up where you left off."
        />

        <div className="mt-10 space-y-12 sm:space-y-14">
          {tripSections.map((section) => (
            <TripSection key={section.title} {...section} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

export default MyTrips;
