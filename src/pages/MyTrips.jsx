import { useState, useEffect, useCallback, useMemo } from 'react';
import PageLayout from '../components/PageLayout.jsx';
import PageHeader from '../components/PageHeader.jsx';
import TripCard from '../components/TripCard.jsx';
import { Loader, Toast, showError } from '../components/ui/index.js';
import TripEmptyState from '../components/TripEmptyState.jsx';
import { getTrips, formatTripDates, formatTripBudget } from '../services/tripService.js';

function TripSection({ title, trips, emptyTitle, emptyMessage }) {
  return (
    <section className="min-w-0">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
        {title}
      </h2>
      {trips.length === 0 ? (
        <TripEmptyState title={emptyTitle} message={emptyMessage} />
      ) : (
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {trips.map((trip) => (
            <TripCard
              key={trip._id}
              destination={trip.destination}
              dates={formatTripDates(trip.startDate, trip.endDate)}
              budget={formatTripBudget(trip.budget)}
              status={trip.status.toLowerCase()}
            />
          ))}
        </div>
      )}
    </section>
  );
}

function MyTrips() {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTrips = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getTrips();
      setTrips(data.trips || []);
    } catch (err) {
      showError(err.message || 'Failed to load trips.');
      setTrips([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTrips();
  }, [fetchTrips]);

  const sections = useMemo(() => {
    const upcoming = trips.filter(
      (t) =>
        t.status === 'Planning' ||
        t.status === 'planning' ||
        t.status === 'Upcoming' ||
        t.status === 'upcoming'
    );
    const completed = trips.filter(
      (t) => t.status === 'Completed' || t.status === 'completed'
    );
    const draft = trips.filter(
      (t) => t.status === 'Draft' || t.status === 'draft'
    );

    return [
      {
        title: 'Upcoming Trips',
        trips: upcoming,
        emptyTitle: 'No upcoming trips.',
        emptyMessage: 'Start planning your next sustainable adventure.',
      },
      {
        title: 'Completed Trips',
        trips: completed,
        emptyTitle: 'No completed trips yet.',
        emptyMessage: 'Revisit this section once you finish a journey.',
      },
      {
        title: 'Draft Trips',
        trips: draft,
        emptyTitle: 'No draft trips.',
        emptyMessage: 'Your incomplete plans will appear here.',
      },
    ];
  }, [trips]);

  return (
    <PageLayout>
      <Toast />
      <div className="mx-auto w-full min-w-0 max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <PageHeader
          title="My Trips"
          description="Manage upcoming adventures, revisit completed journeys, and pick up where you left off."
        />

        {loading ? (
          <div className="mt-10 flex min-h-[400px] items-center justify-center">
            <Loader variant="spinner" size="lg" label="Loading your trips" />
          </div>
        ) : (
          <div className="mt-10 space-y-12 sm:space-y-14">
            {sections.map((section) => (
              <TripSection key={section.title} {...section} />
            ))}
          </div>
        )}
      </div>
    </PageLayout>
  );
}

export default MyTrips;
