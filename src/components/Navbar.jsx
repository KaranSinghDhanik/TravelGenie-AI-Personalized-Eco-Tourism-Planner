import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import ThemeToggle from './ui/ThemeToggle.jsx';

const navLinks = [
  { label: 'Home', path: '/', end: true },
  { label: 'AI Planner', path: '/ai-planner', end: false },
  { label: 'My Trips', path: '/my-trips', end: false },
  { label: 'About', path: '/about', end: false },
  { label: 'Login', path: '/login', end: false },
];

function navLinkClass({ isActive }) {
  return [
    'relative rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200',
    isActive
      ? 'bg-emerald-50 text-emerald-700 shadow-sm dark:bg-emerald-950/60 dark:text-emerald-400'
      : 'text-gray-600 hover:bg-gray-50 hover:text-emerald-700 dark:text-gray-300 dark:hover:bg-gray-800/60 dark:hover:text-emerald-400',
  ].join(' ');
}

function mobileNavLinkClass({ isActive }) {
  return [
    'block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200',
    isActive
      ? 'bg-emerald-50 text-emerald-700 shadow-sm dark:bg-emerald-950/60 dark:text-emerald-400'
      : 'text-gray-700 hover:bg-gray-50 hover:text-emerald-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-emerald-400',
  ].join(' ');
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/60 bg-white/75 shadow-sm shadow-gray-900/5 backdrop-blur-xl dark:border-gray-800/60 dark:bg-gray-900/75 dark:shadow-black/10">
      <nav className="mx-auto flex max-w-6xl min-w-0 items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="shrink-0 text-lg font-bold tracking-tight text-gray-900 transition-colors hover:text-emerald-700 dark:text-white dark:hover:text-emerald-400 sm:text-xl"
          onClick={closeMenu}
        >
          TravelGenie{' '}
          <span className="text-emerald-600 dark:text-emerald-400">AI</span>
        </Link>

        <div className="flex shrink-0 items-center gap-2 md:hidden">
          <ThemeToggle compact />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl p-2.5 text-gray-700 transition-all duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:text-gray-300 dark:hover:bg-gray-800 dark:focus:ring-offset-gray-900"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <ul className="hidden min-w-0 items-center gap-1 md:flex lg:gap-1.5">
          {navLinks.map(({ label, path, end }) => (
            <li key={`${label}-${path}`}>
              <NavLink to={path} className={navLinkClass} end={end}>
                {label}
              </NavLink>
            </li>
          ))}
          <li className="ml-2 pl-2">
            <ThemeToggle />
          </li>
        </ul>
      </nav>

      {isOpen && (
        <div className="border-t border-gray-200/60 bg-white/90 px-4 py-4 backdrop-blur-xl dark:border-gray-800/60 dark:bg-gray-900/90 md:hidden">
          <ul className="space-y-1">
            {navLinks.map(({ label, path, end }) => (
              <li key={`${label}-${path}-mobile`}>
                <NavLink
                  to={path}
                  className={mobileNavLinkClass}
                  end={end}
                  onClick={closeMenu}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
