/**
 * Reusable page header with title and optional description.
 *
 * @param {Object} props - Component props.
 * @param {string} props.title - Page heading.
 * @param {string} [props.description] - Optional subtitle.
 * @param {import('react').ReactNode} [props.action] - Optional action element (button, etc.).
 * @returns {import('react').JSX.Element}
 */
function PageHeader({ title, description, action }) {
  return (
    <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="min-w-0">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-2 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg">
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

export default PageHeader;
