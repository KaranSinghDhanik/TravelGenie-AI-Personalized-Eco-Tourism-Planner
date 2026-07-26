import { MapPin } from 'lucide-react';

/**
 * Empty state shown when no trips exist.
 *
 * @param {Object} props - Component props.
 * @param {string} [props.title='No trips yet.'] - Heading text.
 * @param {string} [props.message='Create your first adventure.'] - Subtitle/description text.
 * @returns {import('react').JSX.Element}
 */
function TripEmptyState({ title = 'No trips yet.', message = 'Create your first adventure.' }) {
  return (
    <div className="mt-6 flex flex-col items-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-6 py-12 text-center dark:border-gray-700 dark:bg-gray-800/50">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 dark:bg-emerald-950">
        <MapPin className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
      </div>
      <p className="mt-4 text-base font-semibold text-gray-900 dark:text-white">
        {title}
      </p>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        {message}
      </p>
    </div>
  );
}

export default TripEmptyState;
