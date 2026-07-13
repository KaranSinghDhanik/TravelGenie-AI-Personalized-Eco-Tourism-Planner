const AUTH_BASE_URL = 'http://localhost:5000/api/auth';

/**
 * Parse auth API JSON response and throw on errors.
 * @param {Response} response
 * @returns {Promise<object>}
 */
async function parseAuthResponse(response) {
  let data;

  try {
    data = await response.json();
  } catch {
    throw new Error('Unable to reach the server. Please ensure the backend is running.');
  }

  if (!response.ok || !data.success) {
    throw new Error(data.message || 'Something went wrong. Please try again.');
  }

  return data;
}

/**
 * Register a new user account.
 * @param {{ name: string, email: string, password: string }} payload
 * @returns {Promise<{ success: boolean, message: string, user: object }>}
 */
export async function registerUser(payload) {
  const response = await fetch(`${AUTH_BASE_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  return parseAuthResponse(response);
}

/**
 * Log in an existing user.
 * @param {{ email: string, password: string }} payload
 * @returns {Promise<{ success: boolean, token: string, user: object }>}
 */
export async function loginUser(payload) {
  const response = await fetch(`${AUTH_BASE_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  return parseAuthResponse(response);
}

/**
 * Fetch currently logged in user's profile.
 * @param {string} token
 * @returns {Promise<{ success: boolean, user: object }>}
 */
export async function fetchCurrentUser(token) {
  const response = await fetch(`${AUTH_BASE_URL}/me`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  return parseAuthResponse(response);
}
