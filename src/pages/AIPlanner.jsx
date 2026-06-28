import { useCallback, useEffect, useState } from 'react';
import PageLayout from '../components/PageLayout.jsx';
import PageHeader from '../components/PageHeader.jsx';
import TravelPlannerForm from '../components/TravelPlannerForm.jsx';
import AiItineraryPreview from '../components/AiItineraryPreview.jsx';
import RecentTripCard from '../components/RecentTripCard.jsx';
import {
  showSuccess,
  showError,
  Toast,
  Loader,
} from '../components/ui/index.js';
import {
  getTrips,
  createTrip,
  mapPlannerFormToTrip,
} from '../services/tripService.js';

function AIPlanner() {
  const [generated, setGenerated] = useState(true);
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchTrips = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getTrips();
      setTrips(data.trips || []);
    } catch (err) {
      setError(err.message || 'Failed to load trips.');
      setTrips([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTrips();
  }, [fetchTrips]);

  const handleGenerate = async (form) => {
    try {
      setIsSubmitting(true);
      const tripPayload = mapPlannerFormToTrip(form);
      await createTrip(tripPayload);
      setGenerated(true);
      showSuccess('Trip created successfully!');
      await fetchTrips();
    } catch (err) {
      showError(err.message || 'Failed to create trip.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <Toast />
      <div className="mx-auto w-full min-w-0 max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <PageHeader
          title="AI Trip Planner"
          description="Describe your dream trip and let AI craft a personalized eco-friendly itinerary. Your trips are saved to the backend automatically."
        />

        {error && (
          <div
            className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-950/50 dark:text-red-400"
            role="alert"
          >
            {error}
          </div>
        )}

        <div className="mt-10 grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
          <TravelPlannerForm
            onGenerate={handleGenerate}
            isSubmitting={isSubmitting}
          />
          <div className="min-w-0 space-y-8">
            {generated ? (
              <AiItineraryPreview />
            ) : (
              <div className="flex min-h-[400px] items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800/50">
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Fill in your trip details and click Generate Itinerary to see
                  your AI-powered plan here.
                </p>
              </div>
            )}

            <section className="min-w-0">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                My Recent Trips
              </h2>

              {loading ? (
                <div className="mt-6 flex justify-center py-8">
                  <Loader variant="spinner" size="md" label="Loading trips" />
                </div>
              ) : trips.length === 0 ? (
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                  No trips created yet.
                </p>
              ) : (
                <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {trips.map((trip) => (
                    <RecentTripCard key={trip._id} trip={trip} />
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default AIPlanner;
