/**
 * Step indicator card for process flows.
 *
 * @param {Object} props - Component props.
 * @param {number | string} props.step - Step number displayed in the badge.
 * @param {string} props.title - Step title.
 * @param {string} props.description - Step description.
 * @returns {import('react').JSX.Element}
 */
function StepCard({ step, title, description }) {
  return (
    <article className="group relative flex min-w-0 flex-col items-center text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-xl font-bold text-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-700 group-hover:shadow-lg dark:bg-emerald-500 dark:group-hover:bg-emerald-400">
        {step}
      </div>
      <h3 className="mt-5 text-lg font-semibold tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-emerald-700 dark:text-white dark:group-hover:text-emerald-400 sm:text-xl">
        {title}
      </h3>
      <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base">
        {description}
      </p>
    </article>
  );
}

export default StepCard;
