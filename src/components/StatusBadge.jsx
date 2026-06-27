const statusStyles = {
  upcoming: 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-400',
  completed: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400',
  draft: 'bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-400',
  saved: 'bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-400',
};

/**
 * Colored status badge for trip cards.
 *
 * @param {Object} props - Component props.
 * @param {'upcoming' | 'completed' | 'draft' | 'saved'} props.status - Trip status.
 * @returns {import('react').JSX.Element}
 */
function StatusBadge({ status }) {
  const label = status.charAt(0).toUpperCase() + status.slice(1);

  return (
    <span
      className={`inline-flex shrink-0 rounded-full px-3 py-1 text-xs font-semibold capitalize ${statusStyles[status]}`}
    >
      {label}
    </span>
  );
}

export default StatusBadge;
