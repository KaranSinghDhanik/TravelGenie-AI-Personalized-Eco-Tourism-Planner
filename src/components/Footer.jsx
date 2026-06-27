import { Link } from 'react-router-dom';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'AI Planner', path: '/ai-planner' },
  { label: 'My Trips', path: '/my-trips' },
  { label: 'About', path: '/about' },
  { label: 'Login', path: '/login' },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl min-w-0 px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          <div className="min-w-0">
            <p className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              TravelGenie{' '}
              <span className="text-emerald-600 dark:text-emerald-400">AI</span>
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              AI-powered eco-tourism planning for travelers who want smarter
              itineraries, authentic stays, and a lighter footprint.
            </p>
          </div>

          <div className="min-w-0">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map(({ label, path }) => (
                <li key={`${label}-${path}`}>
                  <Link
                    to={path}
                    className="text-sm text-gray-600 transition-colors duration-200 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>hello@travelgenie.ai</li>
              <li>+1 (555) 000-0000</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
          <p className="text-center text-sm text-gray-500 dark:text-gray-500 sm:text-left">
            &copy; {year} TravelGenie AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
