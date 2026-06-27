/**
 * Reusable select dropdown with optional label.
 *
 * @param {Object} props - Component props.
 * @param {string} [props.label] - Label text displayed above the select.
 * @param {string} [props.value] - Controlled select value.
 * @param {(event: import('react').ChangeEvent<HTMLSelectElement>) => void} [props.onChange] - Change handler.
 * @param {Array<{ value: string, label: string }>} props.options - Select options.
 * @returns {import('react').JSX.Element}
 */
function Select({ label, value, onChange, options }) {
  const selectId = label
    ? label.toLowerCase().replace(/\s+/g, '-')
    : undefined;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={selectId}
          className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          {label}
        </label>
      )}
      <select
        id={selectId}
        value={value}
        onChange={onChange}
        className="w-full min-w-0 rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-base text-gray-900 transition-colors focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
