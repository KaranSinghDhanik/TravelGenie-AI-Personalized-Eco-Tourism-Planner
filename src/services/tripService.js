const BASE_URL = 'http://localhost:5000/api/trips';

/**
 * Parse JSON response and throw on API errors.
 * @param {Response} response
 * @returns {Promise<object>}
 */
async function parseResponse(response) {
  let data;

  try {
    data = await response.json();
  } catch {
    throw new Error('Unable to reach the server. Please ensure the backend is running.');
  }

  if (!response.ok || !data.success) {
    throw new Error(data.message || 'Something went wrong. Please try again.');
  }

  return data.data;
}

/**
 * Fetch all trips from the backend.
 * @returns {Promise<{ count: number, trips: object[] }>}
 */
export async function getTrips() {
  const response = await fetch(BASE_URL);
  return parseResponse(response);
}

/**
 * Create a new trip via the backend API.
 * @param {object} tripData - Trip payload matching the backend schema.
 * @returns {Promise<{ trip: object }>}
 */
export async function createTrip(tripData) {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(tripData),
  });

  return parseResponse(response);
}

const TRAVEL_STYLE_MAP = {
  relaxed: 'Family',
  adventure: 'Adventure',
  cultural: 'Family',
  budget: 'Budget',
  luxury: 'Luxury',
};

/**
 * Map TravelPlannerForm values to the backend Trip schema.
 * @param {object} form - Form state from TravelPlannerForm.
 * @returns {object}
 */
export function mapPlannerFormToTrip(form) {
  const durationDays = parseInt(form.duration, 10) || 7;
  const startDate = new Date();
  const endDate = new Date();
  endDate.setDate(startDate.getDate() + durationDays);

  const budget = Number(String(form.budget).replace(/[^\d.]/g, ''));
  const travelers = parseInt(form.travelers, 10) || 1;

  const interests = form.interests
    ? form.interests.split(',').map((item) => item.trim()).filter(Boolean)
    : [];

  return {
    destination: form.destination.trim(),
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString(),
    budget: Number.isNaN(budget) ? 0 : budget,
    travelers,
    travelStyle: TRAVEL_STYLE_MAP[form.style] || 'Adventure',
    interests,
    status: 'Upcoming',
  };
}

/**
 * Format a trip's date range for display.
 * @param {string | Date} startDate
 * @param {string | Date} endDate
 * @returns {string}
 */
export function formatTripDates(startDate, endDate) {
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  const start = new Date(startDate).toLocaleDateString('en-IN', options);
  const end = new Date(endDate).toLocaleDateString('en-IN', options);
  return `${start} – ${end}`;
}

/**
 * Format budget for display.
 * @param {number} budget
 * @returns {string}
 */
export function formatTripBudget(budget) {
  return `₹${Number(budget).toLocaleString('en-IN')}`;
}

/**
 * Normalize backend status for StatusBadge component.
 * @param {string} status
 * @returns {'upcoming' | 'completed' | 'draft' | 'saved'}
 */
export function normalizeTripStatus(status) {
  const normalized = status?.toLowerCase();

  if (normalized === 'upcoming') return 'upcoming';
  if (normalized === 'completed') return 'completed';
  if (normalized === 'cancelled') return 'draft';

  return 'draft';
}
