import { Link } from 'react-router-dom';
import { Sparkles, Wallet, Leaf } from 'lucide-react';
import PageLayout from '../components/PageLayout.jsx';
import { Input, Button } from '../components/ui/index.js';

const features = [
  {
    icon: <Sparkles className="h-5 w-5" />,
    text: 'AI-powered itinerary generation',
  },
  {
    icon: <Wallet className="h-5 w-5" />,
    text: 'Budget optimization',
  },
  {
    icon: <Leaf className="h-5 w-5" />,
    text: 'Eco-friendly travel recommendations',
  },
];

function Login() {
  return (
    <PageLayout>
      <div className="mx-auto grid min-h-[calc(100vh-8rem)] w-full min-w-0 max-w-6xl grid-cols-1 items-center gap-12 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-16">
        <div className="min-w-0">
          <p className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            TravelGenie{' '}
            <span className="text-emerald-600 dark:text-emerald-400">AI</span>
          </p>
          <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Welcome Back
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg">
            Sign in to access your saved itineraries, trip history, and
            AI-powered travel recommendations — all in one place.
          </p>
          <ul className="mt-8 space-y-4">
            {features.map((feature) => (
              <li key={feature.text} className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                  {feature.icon}
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 sm:text-base">
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl shadow-gray-900/5 dark:border-gray-700 dark:bg-gray-800 dark:shadow-black/20 sm:p-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Sign in to your account
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Authentication is UI-only for now.
            </p>

            <form
              className="mt-8 space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                label="Email"
                type="email"
                placeholder="you@example.com"
              />
              <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
              />
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <label className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 dark:border-gray-600 dark:bg-gray-900"
                  />
                  Remember Me
                </label>
                <button
                  type="button"
                  className="text-left text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 sm:text-right"
                >
                  Forgot Password?
                </button>
              </div>
              <Button size="lg">Login</Button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
              Don&apos;t have an account?{' '}
              <Link
                to="/login"
                className="font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Login;
