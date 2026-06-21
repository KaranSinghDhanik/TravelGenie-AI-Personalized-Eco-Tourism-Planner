/**
 * Section wrapper for the UI component showcase page.
 *
 * @param {Object} props - Component props.
 * @param {string} props.title - Section heading.
 * @param {string} [props.description] - Optional description below the heading.
 * @param {import('react').ReactNode} props.children - Section content.
 * @returns {import('react').JSX.Element}
 */
function ShowcaseSection({ title, description, children }) {
  return (
    <section className="min-w-0 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800 sm:p-6 md:p-8">
      <div className="min-w-0">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          {title}
        </h2>
        {description && (
          <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">
            {description}
          </p>
        )}
      </div>
      <div className="mt-6 min-w-0">{children}</div>
    </section>
  );
}

export default ShowcaseSection;
