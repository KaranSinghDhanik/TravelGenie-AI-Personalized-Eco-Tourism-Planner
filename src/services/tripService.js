const BASE_URL = 'http://localhost:5000/api/trips';

export const TRIP_STATUSES = ['Planning', 'Completed'];

const TRAVEL_STYLE_TO_FORM = {
  Budget: 'budget',
  Luxury: 'luxury',
  Adventure: 'adventure',
  Family: 'cultural',
  Solo: 'relaxed',
};

const TRAVEL_STYLE_MAP = {
  relaxed: 'Solo',
  adventure: 'Adventure',
  cultural: 'Family',
  budget: 'Budget',
  luxury: 'Luxury',
};

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

function getAuthHeaders(includeContentType = true) {
  const token = localStorage.getItem("travelgenie_token");

  const headers = {};

  if (includeContentType) {
    headers["Content-Type"] = "application/json";
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
}

/**
 * Fetch all trips from the backend.
 * @returns {Promise<{ count: number, trips: object[] }>}
 */
export async function getTrips() {
  const response = await fetch(BASE_URL, {
    headers: getAuthHeaders(false)
  });
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
    headers: getAuthHeaders(),
    body: JSON.stringify(tripData),
  });

  return parseResponse(response);
}

/**
 * Update an existing trip via the backend API.
 * @param {string} id - Trip ID.
 * @param {object} tripData - Fields to update.
 * @returns {Promise<{ trip: object }>}
 */
export async function updateTrip(id, tripData) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    headers: getAuthHeaders(),
    body: JSON.stringify(tripData),
  });

  return parseResponse(response);
}

/**
 * Delete a trip via the backend API.
 * @param {string} id - Trip ID.
 * @returns {Promise<{ trip: object }>}
 */
export async function deleteTrip(id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: getAuthHeaders(false)
  });

  return parseResponse(response);
}

/**
 * Parse a YYYY-MM-DD string as a local date (avoids timezone shifts).
 * @param {string} dateString
 * @returns {Date}
 */
export function parseLocalDate(dateString) {
  const [year, month, day] = dateString.split('-').map(Number);
  return new Date(year, month - 1, day);
}

/**
 * Format a Date or ISO string as YYYY-MM-DD for date inputs.
 * @param {string | Date} date
 * @returns {string}
 */
export function formatDateForInput(date) {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Format a Date for human-readable display.
 * @param {Date | string} date
 * @returns {string}
 */
export function formatDateForDisplay(date) {
  return new Date(date).toLocaleDateString('en-IN', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

/**
 * Calculate end date from a start date string and duration in days.
 * @param {string} startDateStr - YYYY-MM-DD
 * @param {number} durationDays
 * @returns {Date | null}
 */
export function calculateEndDateFromForm(startDateStr, durationDays) {
  if (!startDateStr || !durationDays) return null;

  const startDate = parseLocalDate(startDateStr);
  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + durationDays);

  return endDate;
}

/**
 * Build start and end ISO strings from form start date and duration.
 * @param {string} startDateStr
 * @param {number} durationDays
 * @returns {{ startDate: string, endDate: string }}
 */
function buildTripDates(startDateStr, durationDays) {
  const startDate = parseLocalDate(startDateStr);
  startDate.setHours(12, 0, 0, 0);

  const endDate = calculateEndDateFromForm(startDateStr, durationDays);
  endDate.setHours(12, 0, 0, 0);

  return {
    startDate: startDate.toISOString(),
    endDate: endDate.toISOString(),
  };
}

/**
 * Calculate trip duration in days from start and end dates.
 * @param {string | Date} startDate
 * @param {string | Date} endDate
 * @returns {string}
 */
export function calculateTripDuration(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffMs = end.getTime() - start.getTime();
  const days = Math.max(1, Math.ceil(diffMs / (1000 * 60 * 60 * 24)));
  return String(days);
}

/**
 * Validate planner form fields before submit.
 * @param {object} form
 * @returns {string[]}
 */
export function validatePlannerForm(form) {
  const errors = [];

  if (!form.destination?.trim()) errors.push('Destination is required');
  if (!form.startDate) errors.push('Start date is required');
  if (!String(form.budget ?? '').trim()) errors.push('Budget is required');
  if (!form.duration) errors.push('Trip duration is required');
  if (!String(form.travelers ?? '').trim()) errors.push('Travelers is required');
  if (!form.style) errors.push('Travel style is required');

  return errors;
}

/**
 * Map TravelPlannerForm values to the backend Trip schema for create.
 * @param {object} form - Form state from TravelPlannerForm.
 * @returns {object}
 */
export function mapPlannerFormToTrip(form) {
  const durationDays = parseInt(form.duration, 10);
  const { startDate, endDate } = buildTripDates(form.startDate, durationDays);

  const budget = Number(String(form.budget).replace(/[^\d.]/g, ''));
  const travelers = parseInt(form.travelers, 10);

  const interests = form.interests
    ? form.interests.split(',').map((item) => item.trim()).filter(Boolean)
    : [];

  return {
    destination: form.destination.trim(),
    startDate,
    endDate,
    budget: Number.isNaN(budget) ? 0 : budget,
    travelers,
    travelStyle: TRAVEL_STYLE_MAP[form.style] || 'Adventure',
    interests,
    status: 'Planning',
  };
}

/**
 * Map TravelPlannerForm values to update payload using selected start date.
 * @param {object} form
 * @returns {object}
 */
export function mapPlannerFormToTripUpdate(form) {
  const durationDays = parseInt(form.duration, 10);
  const { startDate, endDate } = buildTripDates(form.startDate, durationDays);

  const budget = Number(String(form.budget).replace(/[^\d.]/g, ''));
  const travelers = parseInt(form.travelers, 10);

  const interests = form.interests
    ? form.interests.split(',').map((item) => item.trim()).filter(Boolean)
    : [];

  return {
    destination: form.destination.trim(),
    startDate,
    endDate,
    budget: Number.isNaN(budget) ? 0 : budget,
    travelers,
    travelStyle: TRAVEL_STYLE_MAP[form.style] || 'Adventure',
    interests,
  };
}

/**
 * Map a backend trip object to TravelPlannerForm values.
 * @param {object} trip
 * @returns {object}
 */
export function mapTripToForm(trip) {
  return {
    destination: trip.destination || '',
    startDate: trip.startDate ? formatDateForInput(trip.startDate) : '',
    budget: trip.budget != null ? String(trip.budget) : '',
    duration: calculateTripDuration(trip.startDate, trip.endDate),
    travelers: trip.travelers != null ? String(trip.travelers) : '',
    interests: Array.isArray(trip.interests) ? trip.interests.join(', ') : '',
    style: TRAVEL_STYLE_TO_FORM[trip.travelStyle] || '',
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
 * Normalize backend status for UI display.
 * @param {string} status
 * @returns {'planning' | 'completed'}
 */
export function normalizeTripStatus(status) {
  if (status === 'Completed') return 'completed';

  // Legacy statuses map to Planning
  return 'planning';
}

/**
 * Get display label for trip status.
 * @param {string} status
 * @returns {'Planning' | 'Completed'}
 */
export function getTripStatusLabel(status) {
  return status === 'Completed' ? 'Completed' : 'Planning';
}
