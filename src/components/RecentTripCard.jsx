import { Calendar, Wallet, Compass } from 'lucide-react';
import StatusBadge from './StatusBadge.jsx';
import {
  formatTripDates,
  formatTripBudget,
  normalizeTripStatus,
} from '../services/tripService.js';

/**
 * Compact trip card for the AI Planner recent trips section.
 *
 * @param {Object} props - Component props.
 * @param {object} props.trip - Trip object from the backend API.
 * @returns {import('react').JSX.Element}
 */
function RecentTripCard({ trip }) {
  return (
    <article className="group flex min-w-0 flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:border-emerald-500/50">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {trip.destination}
        </h3>
        <StatusBadge status={normalizeTripStatus(trip.status)} />
      </div>

      <div className="mt-4 space-y-2">
        {trip.travelStyle && (
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Compass className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
            {trip.travelStyle}
          </div>
        )}
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <Calendar className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
          {formatTripDates(trip.startDate, trip.endDate)}
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <Wallet className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
          {formatTripBudget(trip.budget)}
        </div>
      </div>
    </article>
  );
}

export default RecentTripCard;
