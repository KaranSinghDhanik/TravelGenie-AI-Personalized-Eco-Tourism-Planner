import { createContext, useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TOKEN_STORAGE_KEY = 'travelgenie_token';
const USER_STORAGE_KEY = 'travelgenie_user';

const AuthContext = createContext(null);

/**
 * Read persisted auth state from localStorage.
 * @returns {{ token: string | null, user: object | null }}
 */
function getStoredAuth() 
{
  if (typeof window === 'undefined') {
    return { token: null, user: null };
  }

  const token = localStorage.getItem(TOKEN_STORAGE_KEY);
  const storedUser = localStorage.getItem(USER_STORAGE_KEY);

  if (!token || !storedUser) {
    return { token: null, user: null };
  }

  try {
    return { token, user: JSON.parse(storedUser) };
  } catch {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    localStorage.removeItem(USER_STORAGE_KEY);
    return { token: null, user: null };
  }
}
/**
 * Provides authentication state and actions across the app.
 *
 * @param {Object} props
 * @param {import('react').ReactNode} props.children
 */
function AuthProvider({ children }) {
  const navigate = useNavigate();
  const [authState, setAuthState] = useState(getStoredAuth);

  const login = (token, user) => {
    localStorage.setItem(TOKEN_STORAGE_KEY, token);
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    setAuthState({ token, user });
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    localStorage.removeItem(USER_STORAGE_KEY);
    setAuthState({ token: null, user: null });
    navigate('/login');
  };

  const value = useMemo(
    () => ({
      user: authState.user,
      token: authState.token,
      login,
      logout,
      isAuthenticated: Boolean(authState.token && authState.user),
    }),
    [authState]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

/**
 * Hook to access authentication context.
 * @returns {{
 *   user: object | null,
 *   token: string | null,
 *   login: (token: string, user: object) => void,
 *   logout: () => void,
 *   isAuthenticated: boolean
 * }}
 */
function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
