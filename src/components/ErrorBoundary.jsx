import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './ui/Button.jsx';

/**
 * Functional fallback component that renders the default error message and recovery buttons.
 * Reuses the existing TravelGenie styling, typography, buttons, and colors for seamless design integration.
 *
 * @param {Object} props - Component props.
 * @param {Error} props.error - The rendering error that triggered the boundary.
 * @param {() => void} props.onReset - Callback to clear the error boundary state and re-render.
 */
function DefaultFallbackUI({ error, onReset }) {
  let navigate;
  try {
    navigate = useNavigate();
  } catch (e) {
    // Router context is unavailable (e.g. if the error boundary is rendered outside BrowserRouter)
  }

  const handleGoHome = () => {
    onReset();
    if (navigate) {
      navigate('/dashboard');
    } else {
      window.location.href = '/dashboard';
    }
  };

  const isDev = import.meta.env.DEV;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 py-12 dark:bg-gray-900 sm:px-6 lg:px-8">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-lg dark:border-gray-800 dark:bg-gray-800 sm:p-10">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
          <svg
            className="h-8 w-8 text-emerald-600 dark:text-emerald-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
          Something went wrong
        </h1>
        
        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
          An unexpected rendering error occurred. Please try resetting the page or return to the dashboard.
        </p>

        {isDev && error && (
          <details className="mt-6 text-left">
            <summary className="cursor-pointer text-xs font-semibold text-emerald-600 hover:text-emerald-700 focus:outline-none select-none dark:text-emerald-400 dark:hover:text-emerald-350">
              Show technical details (Development Only)
            </summary>
            <pre className="mt-2 max-h-40 overflow-auto rounded-xl bg-gray-100 p-3 text-xs font-mono text-gray-800 dark:bg-gray-950 dark:text-gray-300">
              {error.stack || error.toString()}
            </pre>
          </details>
        )}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button
            variant="primary"
            size="md"
            onClick={onReset}
          >
            Try Again
          </Button>
          <Button
            variant="secondary"
            size="md"
            onClick={handleGoHome}
          >
            Go to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}

/**
 * Reusable ErrorBoundary class component.
 * Catches errors in child components and displays fallback UI.
 */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an unexpected rendering error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      const { fallback } = this.props;

      // If a custom fallback component/element is provided, render it.
      if (fallback) {
        if (React.isValidElement(fallback)) {
          return fallback;
        }
        const FallbackComponent = fallback;
        return <FallbackComponent error={this.state.error} onReset={this.handleReset} />;
      }

      // Default fallback UI.
      return <DefaultFallbackUI error={this.state.error} onReset={this.handleReset} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
