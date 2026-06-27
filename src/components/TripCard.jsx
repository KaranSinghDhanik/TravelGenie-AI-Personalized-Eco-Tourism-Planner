import { Link } from 'react-router-dom';
import { Calendar, Wallet, ArrowRight } from 'lucide-react';
import StatusBadge from './StatusBadge.jsx';

/**
 * Reusable trip card for My Trips and dashboard lists.
 *
 * @param {Object} props - Component props.
 * @param {string} props.destination - Trip destination name.
 * @param {string} props.dates - Trip date range display string.
 * @param {string} props.budget - Budget display string.
 * @param {'upcoming' | 'completed' | 'draft' | 'saved'} props.status - Trip status.
 * @param {string} [props.linkTo='/ai-planner'] - Route for the Open Trip button.
 * @returns {import('react').JSX.Element}
 */
function TripCard({ destination, dates, budget, status, linkTo = '/ai-planner' }) {
  return (
    <article className="group flex min-w-0 flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:border-emerald-500/50">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {destination}
        </h3>
        <StatusBadge status={status} />
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <Calendar className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
          {dates}
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <Wallet className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
          {budget}
        </div>
      </div>

      <div className="mt-6">
        <Link
          to={linkTo}
          className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm font-semibold text-gray-700 transition-all duration-200 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-emerald-500 dark:hover:bg-emerald-950 dark:hover:text-emerald-400 sm:w-auto"
        >
          Open Trip
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}

export default TripCard;
