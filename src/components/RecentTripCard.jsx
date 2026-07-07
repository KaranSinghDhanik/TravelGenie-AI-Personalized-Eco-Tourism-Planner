import { Calendar, Wallet, Compass, Pencil, Trash2 } from 'lucide-react';
import StatusBadge from './StatusBadge.jsx';
import { Button } from './ui/index.js';
import {
  formatTripDates,
  formatTripBudget,
  normalizeTripStatus,
  TRIP_STATUSES,
} from '../services/tripService.js';

/**
 * Compact trip card for the AI Planner recent trips section.
 *
 * @param {Object} props - Component props.
 * @param {object} props.trip - Trip object from the backend API.
 * @param {() => void} props.onEdit - Edit button handler.
 * @param {() => void} props.onDelete - Delete button handler.
 * @param {(status: string) => void} props.onStatusChange - Status change handler.
 * @param {boolean} [props.isUpdating=false] - Disables actions while updating.
 * @param {boolean} [props.isDeleting=false] - Disables actions while deleting.
 * @returns {import('react').JSX.Element}
 */
function RecentTripCard({
  trip,
  onEdit,
  onDelete,
  onStatusChange,
  isUpdating = false,
  isDeleting = false,
}) {
  const isBusy = isUpdating || isDeleting;
  const statusKey = normalizeTripStatus(trip.status);

  return (
    <article className="group flex min-w-0 flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:border-emerald-500/50">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {trip.destination}
        </h3>
        <StatusBadge status={statusKey} />
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

      <div className="mt-4">
        <label className="mb-1.5 block text-xs font-medium text-gray-500 dark:text-gray-400">
          Status
        </label>
        <select
          value={trip.status === 'Completed' ? 'Completed' : 'Planning'}
          onChange={(e) => onStatusChange(e.target.value)}
          disabled={isBusy}
          className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 transition-colors focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
        >
          {TRIP_STATUSES.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5 flex flex-col gap-2 sm:flex-row">
        <Button
          variant="secondary"
          size="sm"
          onClick={onEdit}
          disabled={isBusy}
        >
          <span className="inline-flex items-center gap-1.5">
            <Pencil className="h-4 w-4" />
            Edit
          </span>
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={onDelete}
          disabled={isBusy}
        >
          <span className="inline-flex items-center gap-1.5">
            <Trash2 className="h-4 w-4" />
            {isDeleting ? 'Deleting...' : 'Delete'}
          </span>
        </Button>
      </div>
    </article>
  );
}

export default RecentTripCard;
