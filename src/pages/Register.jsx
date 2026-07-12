import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles, MapPin, Leaf } from 'lucide-react';
import PageLayout from '../components/PageLayout.jsx';
import { Input, Button, Toast, showSuccess, showError } from '../components/ui/index.js';
import { registerUser } from '../services/authService.js';

const features = [
  {
    icon: <Sparkles className="h-5 w-5" />,
    text: 'AI-powered itinerary generation',
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    text: 'Personalized eco-travel planning',
  },
  {
    icon: <Leaf className="h-5 w-5" />,
    text: 'Sustainable destination recommendations',
  },
];

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      showError('Passwords do not match.');
      return;
    }

    try {
      setIsSubmitting(true);
      await registerUser({
        name: form.name.trim(),
        email: form.email.trim(),
        password: form.password,
      });
      showSuccess('Account created successfully! Please sign in.');
      navigate('/login');
    } catch (err) {
      showError(err.message || 'Registration failed.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <Toast />
      <div className="mx-auto grid min-h-[calc(100vh-8rem)] w-full min-w-0 max-w-6xl grid-cols-1 items-center gap-12 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-16">
        <div className="min-w-0">
          <p className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            TravelGenie{' '}
            <span className="text-emerald-600 dark:text-emerald-400">AI</span>
          </p>
          <h1 className="mt-8 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Create Your Account
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg">
            Join TravelGenie AI to save trips, track itineraries, and unlock
            personalized eco-tourism planning.
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
              Sign up for free
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Start planning smarter, sustainable adventures today.
            </p>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <Input
                label="Full Name"
                type="text"
                placeholder="Your full name"
                value={form.name}
                onChange={update('name')}
              />
              <Input
                label="Email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={update('email')}
              />
              <Input
                label="Password"
                type="password"
                placeholder="Create a password"
                value={form.password}
                onChange={update('password')}
              />
              <Input
                label="Confirm Password"
                type="password"
                placeholder="Confirm your password"
                value={form.confirmPassword}
                onChange={update('confirmPassword')}
              />
              <Button type="submit" size="lg" disabled={isSubmitting}>
                {isSubmitting ? 'Creating Account...' : 'Create Account'}
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{' '}
              <Link
                to="/login"
                className="font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Register;
