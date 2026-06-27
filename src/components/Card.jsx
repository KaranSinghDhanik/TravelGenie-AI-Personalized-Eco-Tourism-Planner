/**
 * Reusable content card with hover animation and optional icon.
 *
 * @param {Object} props - Component props.
 * @param {string} props.title - Card heading text.
 * @param {string} props.description - Card body description.
 * @param {import('react').ReactNode} [props.icon] - Optional icon element displayed above the title.
 * @returns {import('react').JSX.Element}
 */
function Card({ title, description, icon }) {
  return (
    <article className="group flex h-full min-w-0 flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-emerald-500/50 dark:hover:shadow-emerald-900/20 sm:p-8">
      {icon && (
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-100 dark:bg-emerald-950 dark:text-emerald-400 dark:group-hover:bg-emerald-900">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-emerald-700 dark:text-white dark:group-hover:text-emerald-400 sm:text-xl">
        {title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300 sm:text-base">
        {description}
      </p>
    </article>
  );
}

export default Card;
