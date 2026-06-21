/**
 * Reusable button component with variant and size options.
 *
 * @param {Object} props - Component props.
 * @param {'primary' | 'secondary' | 'outline'} [props.variant='primary'] - Visual style variant.
 * @param {'sm' | 'md' | 'lg'} [props.size='md'] - Button size.
 * @param {boolean} [props.disabled=false] - Disables the button when true.
 * @param {() => void} [props.onClick] - Click event handler.
 * @param {import('react').ReactNode} props.children - Button label or content.
 * @returns {import('react').JSX.Element}
 */
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  children,
}) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-offset-gray-900';

  const variantStyles = {
    primary:
      'bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400',
    secondary:
      'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600',
    outline:
      'border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 focus:ring-emerald-500 dark:border-emerald-400 dark:text-emerald-300 dark:hover:bg-emerald-950',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3 text-lg',
  };

  return (
    <button
      type="button"
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
