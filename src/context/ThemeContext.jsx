import { createContext, useContext, useEffect, useState } from 'react';

const THEME_STORAGE_KEY = 'theme';

const ThemeContext = createContext(null);

/**
 * Reads the persisted theme from localStorage.
 *
 * @returns {'light' | 'dark'} The stored theme or 'light' as default.
 */
function getStoredTheme() {
  if (typeof window === 'undefined') return 'light';

  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === 'light' || stored === 'dark') return stored;

  return 'light';
}

/**
 * Applies the theme class and data attribute to the html root element.
 *
 * @param {'light' | 'dark'} theme - Theme to apply.
 */
function applyThemeToRoot(theme) {
  const root = document.documentElement;
  root.classList.toggle('dark', theme === 'dark');
  root.setAttribute('data-theme', theme);
}

/**
 * Provides theme state and toggle functionality to the application.
 *
 * @param {Object} props - Component props.
 * @param {import('react').ReactNode} props.children - Child components.
 * @returns {import('react').JSX.Element}
 */
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getStoredTheme);

  useEffect(() => {
    applyThemeToRoot(theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Hook to access the current theme and toggle function.
 *
 * @returns {{ theme: 'light' | 'dark', toggleTheme: () => void }}
 */
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export { ThemeProvider, useTheme };
