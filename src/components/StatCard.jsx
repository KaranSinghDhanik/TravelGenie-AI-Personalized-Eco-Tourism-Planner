/**
 * Dashboard statistic card with icon, label, and value.
 *
 * @param {Object} props - Component props.
 * @param {import('react').ReactNode} props.icon - Icon element.
 * @param {string} props.label - Stat label.
 * @param {string} props.value - Stat value.
 * @param {string} [props.trend] - Optional trend text (e.g. "+12% this month").
 * @returns {import('react').JSX.Element}
 */
function StatCard({ icon, label, value, trend }) {
  return (
    <article className="group flex min-w-0 flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-emerald-500/50">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-transform duration-300 group-hover:scale-110 dark:bg-emerald-950 dark:text-emerald-400">
          {icon}
        </div>
        {trend && (
          <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
            {trend}
          </span>
        )}
      </div>
      <p className="mt-4 text-sm font-medium text-gray-500 dark:text-gray-400">
        {label}
      </p>
      <p className="mt-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {value}
      </p>
    </article>
  );
}

export default StatCard;
