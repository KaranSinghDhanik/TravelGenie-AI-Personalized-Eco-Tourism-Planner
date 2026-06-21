/**
 * Spinning loader indicator.
 *
 * @param {Object} props - Component props.
 * @param {'sm' | 'md' | 'lg'} [props.size='md'] - Spinner size.
 * @param {string} [props.label='Loading'] - Accessible label for screen readers.
 * @returns {import('react').JSX.Element}
 */
function Spinner({ size = 'md', label = 'Loading' }) {
  const sizeStyles = {
    sm: 'h-5 w-5 border-2',
    md: 'h-8 w-8 border-2',
    lg: 'h-12 w-12 border-[3px]',
  };

  return (
    <div
      role="status"
      aria-label={label}
      className="inline-flex items-center justify-center"
    >
      <div
        className={`animate-spin rounded-full border-emerald-600 border-t-transparent dark:border-emerald-400 dark:border-t-transparent ${sizeStyles[size]}`}
      />
      <span className="sr-only">{label}</span>
    </div>
  );
}

/**
 * Skeleton placeholder card for loading states.
 *
 * @param {Object} props - Component props.
 * @param {number} [props.lines=3] - Number of text line placeholders to render.
 * @returns {import('react').JSX.Element}
 */
function SkeletonCard({ lines = 3 }) {
  return (
    <div
      role="status"
      aria-label="Loading content"
      className="animate-pulse rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"
    >
      <div className="mb-4 h-40 rounded-xl bg-gray-200 dark:bg-gray-700" />
      <div className="mb-3 h-5 w-3/4 rounded-lg bg-gray-200 dark:bg-gray-700" />
      {Array.from({ length: lines }, (_, index) => (
        <div
          key={index}
          className={`mb-2 h-4 rounded-lg bg-gray-200 dark:bg-gray-700 ${
            index === lines - 1 ? 'w-2/3' : 'w-full'
          }`}
        />
      ))}
      <span className="sr-only">Loading content</span>
    </div>
  );
}

/**
 * Loader component with spinner and skeleton card variants.
 *
 * @param {Object} props - Component props.
 * @param {'spinner' | 'skeleton'} [props.variant='spinner'] - Loader variant to display.
 * @param {'sm' | 'md' | 'lg'} [props.size='md'] - Spinner size (spinner variant only).
 * @param {string} [props.label='Loading'] - Accessible label (spinner variant only).
 * @param {number} [props.lines=3] - Skeleton text lines (skeleton variant only).
 * @returns {import('react').JSX.Element}
 */
function Loader({
  variant = 'spinner',
  size = 'md',
  label = 'Loading',
  lines = 3,
}) {
  if (variant === 'skeleton') {
    return <SkeletonCard lines={lines} />;
  }

  return <Spinner size={size} label={label} />;
}

export { Spinner, SkeletonCard };
export default Loader;
