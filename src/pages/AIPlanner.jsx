import { useCallback, useEffect, useState } from 'react';
import PageLayout from '../components/PageLayout.jsx';
import PageHeader from '../components/PageHeader.jsx';
import TravelPlannerForm from '../components/TravelPlannerForm.jsx';
import AiItineraryPreview from '../components/AiItineraryPreview.jsx';
import RecentTripCard from '../components/RecentTripCard.jsx';
import TripEmptyState from '../components/TripEmptyState.jsx';
import { Modal, Button, showSuccess, showError, Toast, Loader } from '../components/ui/index.js';
import {
  getTrips,
  createTrip,
  updateTrip,
  deleteTrip,
  mapPlannerFormToTrip,
  mapPlannerFormToTripUpdate,
  mapTripToForm,
  validatePlannerForm,
} from '../services/tripService.js';
import { generateItinerary } from '../services/aiService.js';

function AIPlanner() {
  const [generatedItinerary, setGeneratedItinerary] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [plannerForm, setPlannerForm] = useState(null);
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingTrip, setEditingTrip] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [deletingTrip, setDeletingTrip] = useState(null);
  const [tripToDelete, setTripToDelete] = useState(null);
  const [updatingTripId, setUpdatingTripId] = useState(null);

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

  const handleGenerateItinerary = async (form) => {
    const validationErrors = validatePlannerForm(form);
    if (validationErrors.length > 0) {
      showError(validationErrors.join(', '));
      return;
    }

    try {
      setIsGenerating(true);
      setPlannerForm(form);
      const itinerary = await generateItinerary(form);
      setGeneratedItinerary(itinerary);
      showSuccess('Itinerary generated successfully!');
    } catch (err) {
      showError(err.message || 'Failed to generate itinerary.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSaveTrip = async () => {
    if (!plannerForm) return;

    try {
      setIsSubmitting(true);
      const tripPayload = mapPlannerFormToTrip(plannerForm);
      await createTrip(tripPayload);
      showSuccess('Trip saved successfully!');
      setGeneratedItinerary(null);
      setPlannerForm(null);
      await fetchTrips();
    } catch (err) {
      showError(err.message || 'Failed to save trip.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEditSave = async (form) => {
    if (!editingTrip) return;

    const validationErrors = validatePlannerForm(form);
    if (validationErrors.length > 0) {
      showError(validationErrors.join(', '));
      return;
    }

    try {
      setIsUpdating(true);
      const payload = mapPlannerFormToTripUpdate(form);
      await updateTrip(editingTrip._id, payload);
      showSuccess('Trip updated successfully!');
      setEditingTrip(null);
      await fetchTrips();
    } catch (err) {
      showError(err.message || 'Failed to update trip.');
    } finally {
      setIsUpdating(false);
    }
  };

  const handleStatusChange = async (tripId, newStatus) => {
    const previousTrips = trips;

    setTrips((current) =>
      current.map((trip) =>
        trip._id === tripId ? { ...trip, status: newStatus } : trip
      )
    );

    try {
      setUpdatingTripId(tripId);
      await updateTrip(tripId, { status: newStatus });
      showSuccess('Trip status updated!');
    } catch (err) {
      setTrips(previousTrips);
      showError(err.message || 'Failed to update status.');
    } finally {
      setUpdatingTripId(null);
    }
  };

  const handleDeleteConfirm = async () => {
    if (!tripToDelete) return;

    try {
      setDeletingTrip(tripToDelete._id);
      await deleteTrip(tripToDelete._id);
      setTrips((current) => current.filter((trip) => trip._id !== tripToDelete._id));
      showSuccess('Trip deleted successfully!');
      setTripToDelete(null);
    } catch (err) {
      showError(err.message || 'Failed to delete trip.');
    } finally {
      setDeletingTrip(null);
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
            onSubmit={handleGenerateItinerary}
            isSubmitting={isGenerating}
            submitLabel="Generate Itinerary"
            submittingLabel="Generating..."
          />
          <div className="min-w-0 space-y-8">
            {isGenerating ? (
              <div className="flex min-h-[400px] items-center justify-center rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                <Loader variant="spinner" size="md" label="Generating itinerary" />
              </div>
            ) : generatedItinerary ? (
              <AiItineraryPreview itinerary={generatedItinerary} onSave={handleSaveTrip} />
            ) : (
              <div className="flex min-h-[400px] items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800/50">
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Fill in your trip details and click Generate Itinerary to see your
                  AI-powered plan here.
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
                <TripEmptyState />
              ) : (
                <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {trips.map((trip) => (
                    <RecentTripCard
                      key={trip._id}
                      trip={trip}
                      onEdit={() => setEditingTrip(trip)}
                      onDelete={() => setTripToDelete(trip)}
                      onStatusChange={(status) => handleStatusChange(trip._id, status)}
                      isUpdating={updatingTripId === trip._id}
                      isDeleting={deletingTrip === trip._id}
                    />
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
      </div>

      <Modal
        isOpen={Boolean(editingTrip)}
        onClose={() => !isUpdating && setEditingTrip(null)}
        title="Edit Trip"
      >
        {editingTrip && (
          <TravelPlannerForm
            key={editingTrip._id}
            initialValues={mapTripToForm(editingTrip)}
            onSubmit={handleEditSave}
            isSubmitting={isUpdating}
            submitLabel="Save Trip"
            submittingLabel="Saving..."
            showHeader={false}
          />
        )}
      </Modal>

      <Modal
        isOpen={Boolean(tripToDelete)}
        onClose={() => !deletingTrip && setTripToDelete(null)}
        title="Delete Trip"
      >
        <p className="mb-6 leading-relaxed">
          Are you sure you want to delete this trip?
        </p>
        {tripToDelete && (
          <p className="mb-6 text-sm font-medium text-gray-900 dark:text-white">
            {tripToDelete.destination}
          </p>
        )}
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button
            variant="secondary"
            onClick={() => setTripToDelete(null)}
            disabled={Boolean(deletingTrip)}
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={handleDeleteConfirm}
            disabled={Boolean(deletingTrip)}
          >
            {deletingTrip ? 'Deleting...' : 'Delete'}
          </Button>
        </div>
      </Modal>
    </PageLayout>
  );
}

export default AIPlanner;
