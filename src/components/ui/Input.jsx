/**
 * Reusable text input with optional label and error message.
 *
 * @param {Object} props - Component props.
 * @param {string} [props.label] - Label text displayed above the input.
 * @param {string} [props.placeholder] - Placeholder text for the input field.
 * @param {string} [props.type='text'] - HTML input type (text, email, password, etc.).
 * @param {string} [props.value] - Controlled input value.
 * @param {(event: import('react').ChangeEvent<HTMLInputElement>) => void} [props.onChange] - Change event handler.
 * @param {string} [props.error] - Error message displayed below the input when provided.
 * @returns {import('react').JSX.Element}
 */
function Input({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  error,
}) {
  const inputId = label
    ? label.toLowerCase().replace(/\s+/g, '-')
    : undefined;

  const inputStyles = error
    ? 'border-red-400 focus:border-red-500 focus:ring-red-500 dark:border-red-500'
    : 'border-gray-300 focus:border-emerald-500 focus:ring-emerald-500 dark:border-gray-600';

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-200"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={`w-full min-w-0 rounded-xl border bg-white px-4 py-2.5 text-base text-gray-900 placeholder-gray-400 transition-colors focus:outline-none focus:ring-2 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder-gray-500 ${inputStyles}`}
      />
      {error && (
        <p
          id={`${inputId}-error`}
          className="mt-1.5 text-sm text-red-600 dark:text-red-400"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;
