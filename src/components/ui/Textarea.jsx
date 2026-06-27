/**
 * Reusable textarea with optional label.
 *
 * @param {Object} props - Component props.
 * @param {string} [props.label] - Label text displayed above the textarea.
 * @param {string} [props.placeholder] - Placeholder text.
 * @param {string} [props.value] - Controlled value.
 * @param {(event: import('react').ChangeEvent<HTMLTextAreaElement>) => void} [props.onChange] - Change handler.
 * @param {number} [props.rows=3] - Number of visible text rows.
 * @returns {import('react').JSX.Element}
 */
function Textarea({ label, placeholder, value, onChange, rows = 3 }) {
  const textareaId = label
    ? label.toLowerCase().replace(/\s+/g, '-')
    : undefined;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={textareaId}
          className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          {label}
        </label>
      )}
      <textarea
        id={textareaId}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full min-w-0 resize-y rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-base text-gray-900 placeholder-gray-400 transition-colors focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder-gray-500"
      />
    </div>
  );
}

export default Textarea;
