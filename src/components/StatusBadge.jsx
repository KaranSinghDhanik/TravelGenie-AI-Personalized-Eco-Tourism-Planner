const statusStyles = {
  planning: 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-400',
  completed: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400',
};

const legacyStatusMap = {
  upcoming: 'planning',
  draft: 'planning',
  saved: 'planning',
  cancelled: 'planning',
};

/**
 * Colored status badge for trip cards.
 *
 * @param {Object} props - Component props.
 * @param {'planning' | 'completed' | string} props.status - Trip status key.
 * @param {string} [props.label] - Optional override for display text.
 * @returns {import('react').JSX.Element}
 */
function StatusBadge({ status, label }) {
  const normalizedKey = legacyStatusMap[status] || status;
  const displayLabel =
    label ||
    (normalizedKey === 'completed' ? 'Completed' : 'Planning');

  return (
    <span
      className={`inline-flex shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[normalizedKey] || statusStyles.planning}`}
    >
      {displayLabel}
    </span>
  );
}

export default StatusBadge;
