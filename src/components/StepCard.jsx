/**
 * Step indicator for timeline and process flows.
 *
 * @param {Object} props - Component props.
 * @param {number | string} props.step - Step number displayed in the badge.
 * @param {string} props.description - Step description text.
 * @param {string} [props.title] - Optional step title (hidden when omitted).
 * @returns {import('react').JSX.Element}
 */
function StepCard({ step, description, title }) {
  return (
    <article className="group relative flex min-w-0 items-start gap-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:hover:border-emerald-500/50 sm:gap-6 sm:p-8">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-lg font-bold text-white shadow-md shadow-emerald-600/30 transition-all duration-300 group-hover:scale-105 group-hover:bg-emerald-700 dark:bg-emerald-500 dark:shadow-emerald-500/20 dark:group-hover:bg-emerald-400">
        {step}
      </div>
      <div className="min-w-0 pt-1">
        {title && (
          <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white sm:text-xl">
            {title}
          </h3>
        )}
        <p
          className={`text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg ${
            title ? 'mt-2' : ''
          }`}
        >
          {description}
        </p>
      </div>
    </article>
  );
}

export default StepCard;
