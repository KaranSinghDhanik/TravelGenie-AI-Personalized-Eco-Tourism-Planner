import { useEffect, useRef } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { fetchCurrentUser } from '../services/authService.js';
import Loader from '../components/ui/Loader.jsx';
import { Toast, showError } from '../components/ui/index.js';

function AuthSuccess() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { login, logout } = useAuth();
  const token = searchParams.get('token');
  const calledRef = useRef(false);

  useEffect(() => {
    if (calledRef.current) return;
    calledRef.current = true;

    async function handleAuth() {
      if (!token) {
        localStorage.removeItem('travelgenie_token');
        localStorage.removeItem('travelgenie_user');
        logout();
        showError('No authentication token received.');
        return;
      }

      try {
        const response = await fetchCurrentUser(token);
        if (response.success && response.user) {
          login(token, response.user);
          navigate('/dashboard');
        } else {
          throw new Error(response.message || 'Failed to retrieve profile.');
        }
      } catch (err) {
        console.error('OAuth Success Callback Error:', err);
        localStorage.removeItem('travelgenie_token');
        localStorage.removeItem('travelgenie_user');
        logout();
        showError(err.message || 'Authentication failed. Please try again.');
      }
    }

    handleAuth();
  }, [token, login, logout, navigate]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 dark:bg-gray-900">
      <Toast />
      <div className="flex flex-col items-center space-y-4">
        <Loader size="lg" />
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
          Completing sign in...
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Please wait while we set up your session.
        </p>
      </div>
    </div>
  );
}

export default AuthSuccess;
