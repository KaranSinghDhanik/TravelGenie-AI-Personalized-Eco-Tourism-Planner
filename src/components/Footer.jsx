import { Link } from 'react-router-dom';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'UI Showcase', path: '/ui-showcase' },
  { label: 'Login', path: '/login' },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-emerald-800/30 bg-emerald-900 dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl min-w-0 px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <div className="min-w-0">
            <p className="text-lg font-bold text-emerald-50 dark:text-white">
              TravelGenie AI
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-emerald-200/80 dark:text-gray-400">
              AI-powered eco-tourism planning for travelers who want smarter
              itineraries and a lighter footprint.
            </p>
          </div>

          <div className="min-w-0">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-100 dark:text-gray-200">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-sm text-emerald-200/80 transition-colors hover:text-emerald-50 dark:text-gray-400 dark:hover:text-emerald-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-100 dark:text-gray-200">
              Contact
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-emerald-200/80 dark:text-gray-400">
              <li>hello@travelgenie.ai</li>
              <li>+1 (555) 000-0000</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-emerald-800/40 pt-8 text-center dark:border-gray-800 sm:text-left">
          <p className="text-sm text-emerald-200/70 dark:text-gray-500">
            &copy; {year} TravelGenie AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
