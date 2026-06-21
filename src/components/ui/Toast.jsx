import toast, { Toaster } from 'react-hot-toast';

/**
 * Displays a success toast notification.
 *
 * @param {string} message - The message to display in the toast.
 * @returns {string} The toast notification id.
 */
export function showSuccess(message) {
  return toast.success(message);
}

/**
 * Displays an error toast notification.
 *
 * @param {string} message - The message to display in the toast.
 * @returns {string} The toast notification id.
 */
export function showError(message) {
  return toast.error(message);
}

/**
 * Displays an info toast notification.
 *
 * @param {string} message - The message to display in the toast.
 * @returns {string} The toast notification id.
 */
export function showInfo(message) {
  return toast(message, {
    icon: (
      <svg
        className="h-5 w-5 text-blue-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  });
}

/**
 * Toast container component that renders the react-hot-toast Toaster.
 * Mount once near the root of the application.
 *
 * @returns {import('react').JSX.Element}
 */
function Toast() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        className:
          '!rounded-xl !border !border-gray-200 !bg-white !text-gray-900 !shadow-lg dark:!border-gray-700 dark:!bg-gray-800 dark:!text-gray-100',
        success: {
          iconTheme: {
            primary: '#059669',
            secondary: '#ffffff',
          },
        },
        error: {
          iconTheme: {
            primary: '#dc2626',
            secondary: '#ffffff',
          },
        },
      }}
    />
  );
}

export default Toast;
