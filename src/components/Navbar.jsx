import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import ThemeToggle from './ui/ThemeToggle.jsx';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'UI Showcase', path: '/ui-showcase' },
  { label: 'Login', path: '/login' },
];

function navLinkClass({ isActive }) {
  return `text-sm font-medium transition-colors ${
    isActive
      ? 'text-emerald-700 font-semibold dark:text-emerald-400'
      : 'text-gray-700 hover:text-emerald-700 dark:text-gray-300 dark:hover:text-emerald-400'
  }`;
}

function mobileNavLinkClass({ isActive }) {
  return `block rounded-md px-3 py-2 text-sm font-medium transition-colors ${
    isActive
      ? 'bg-emerald-50 text-emerald-700 font-semibold dark:bg-emerald-950 dark:text-emerald-400'
      : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 dark:text-gray-300 dark:hover:bg-emerald-950 dark:hover:text-emerald-400'
  }`;
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-100 bg-white/95 backdrop-blur dark:border-gray-800 dark:bg-gray-900/95">
      <nav className="mx-auto flex max-w-6xl min-w-0 items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="shrink-0 text-lg font-bold tracking-tight text-emerald-800 dark:text-emerald-400 sm:text-xl"
          onClick={closeMenu}
        >
          TravelGenie AI
        </Link>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3 md:hidden">
          <ThemeToggle compact />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-emerald-800 transition-colors hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:text-emerald-400 dark:hover:bg-gray-800 dark:focus:ring-offset-gray-900"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            <svg
              className="h-6 w-6"
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

        <ul className="hidden min-w-0 items-center gap-5 md:flex lg:gap-6">
          {navLinks.map(({ label, path }) => (
            <li key={path}>
              <NavLink to={path} className={navLinkClass} end={path === '/'}>
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>

      {isOpen && (
        <ul className="border-t border-emerald-100 px-4 py-3 dark:border-gray-800 md:hidden">
          {navLinks.map(({ label, path }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={mobileNavLinkClass}
                end={path === '/'}
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Navbar;
