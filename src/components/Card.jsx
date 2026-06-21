/**
 * Reusable content card with hover animation.
 *
 * @param {Object} props - Component props.
 * @param {string} props.title - Card heading text.
 * @param {string} props.description - Card body description.
 * @returns {import('react').JSX.Element}
 */
function Card({ title, description }) {
  return (
    <article className="group flex h-full min-w-0 flex-col rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:border-emerald-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:border-emerald-500 dark:hover:shadow-emerald-900/20 sm:p-8">
      <h3 className="text-lg font-semibold tracking-tight text-emerald-800 transition-colors duration-300 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400 sm:text-xl">
        {title}
      </h3>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-gray-700 dark:text-gray-300 dark:group-hover:text-gray-200 sm:text-base">
        {description}
      </p>
    </article>
  );
}

export default Card;
