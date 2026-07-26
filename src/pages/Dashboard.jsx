import { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Map,
  Bookmark,
  Wallet,
  Sparkles,
  Clock,
  Compass,
  Activity,
  Calendar,
  CheckCircle2,
  FileText,
} from 'lucide-react';
import PageLayout from '../components/PageLayout.jsx';
import StatCard from '../components/StatCard.jsx';
import TripCard from '../components/TripCard.jsx';
import Card from '../components/Card.jsx';
import { useAuth } from '../context/AuthContext.jsx';
import { Loader, Toast, showError } from '../components/ui/index.js';
import TripEmptyState from '../components/TripEmptyState.jsx';
import { getTrips, formatTripDates, formatTripBudget } from '../services/tripService.js';

const recentPlans = [
  {
    title: 'Kerala Eco Adventure',
    description: '7-day cultural immersion with backwaters and tea trails.',
  },
  {
    title: 'Rishikesh Wellness Retreat',
    description: '5-day yoga, rafting, and riverside eco-lodge stay.',
  },
];

const recommendedDestinations = [
  {
    title: 'Meghalaya',
    description: 'Living root bridges, waterfalls, and cloud forests.',
  },
  {
    title: 'Spiti Valley',
    description: 'High-altitude desert landscapes and ancient monasteries.',
  },
  {
    title: 'Andaman Islands',
    description: 'Pristine beaches, coral reefs, and marine conservation.',
  },
];

function Dashboard() 
{
  const { user } = useAuth();
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTrips = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getTrips();
      setTrips(data.trips || []);
    } catch (err) {
      showError(err.message || 'Failed to load dashboard data.');
      setTrips([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTrips();
  }, [fetchTrips]);


  const stats = useMemo(() => {
    const total = trips.length;
    const upcoming = trips.filter(
      (t) =>
        t.status === 'Planning' ||
        t.status === 'planning' ||
        t.status === 'Upcoming' ||
        t.status === 'upcoming'
    ).length;
    const completed = trips.filter(
      (t) => t.status === 'Completed' || t.status === 'completed'
    ).length;
    const draft = trips.filter(
      (t) => t.status === 'Draft' || t.status === 'draft'
    ).length;

    return { total, upcoming, completed, draft };
  }, [trips]);

  const sortedTrips = useMemo(() => {
    return [...trips].sort((a, b) => {
      const dateA = new Date(a.updatedAt || a.createdAt || 0);
      const dateB = new Date(b.updatedAt || b.createdAt || 0);
      return dateB - dateA;
    });
  }, [trips]);

  const recentTripsToShow = useMemo(() => {
    return sortedTrips.slice(0, 2);
  }, [sortedTrips]);

  const activityTimeline = useMemo(() => {
    if (!trips || trips.length === 0) return [];

    return sortedTrips.slice(0, 4).map((trip) => {
      const isCompleted =
        trip.status === 'Completed' || trip.status === 'completed';
      const tripDate = new Date(trip.updatedAt || trip.createdAt);
      const timeDiff = new Date() - tripDate;

      let timeStr = 'Recently';
      const hours = Math.floor(timeDiff / (1000 * 60 * 60));
      if (hours < 1) {
        const mins = Math.floor(timeDiff / (1000 * 60));
        timeStr = mins <= 1 ? 'Just now' : `${mins} minutes ago`;
      } else if (hours < 24) {
        timeStr = hours === 1 ? '1 hour ago' : `${hours} hours ago`;
      } else {
        const days = Math.floor(hours / 24);
        timeStr = days === 1 ? 'Yesterday' : `${days} days ago`;
      }

      return {
        time: timeStr,
        action: isCompleted
          ? `Completed trip to ${trip.destination}`
          : `Planned trip to ${trip.destination}`,
      };
    });
  }, [trips, sortedTrips]);

  return (
    <PageLayout>
      <Toast />
      <div className="mx-auto w-full min-w-0 max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="min-w-0">
          <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
            Dashboard
          </p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Welcome back, {user?.name || 'Traveler'}!
          </h1>
          <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
            Here&apos;s an overview of your travel planning activity.
          </p>
        </div>

        {loading ? (
          <div className="mt-10 flex min-h-[400px] items-center justify-center">
            <Loader variant="spinner" size="lg" label="Loading dashboard data" />
          </div>
        ) : (
          <>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <StatCard
                icon={<Map className="h-5 w-5" />}
                label="Trips Planned"
                value={String(stats.total)}
              />
              <StatCard
                icon={<Calendar className="h-5 w-5" />}
                label="Upcoming Trips"
                value={String(stats.upcoming)}
              />
              <StatCard
                icon={<CheckCircle2 className="h-5 w-5" />}
                label="Completed Trips"
                value={String(stats.completed)}
              />
              <StatCard
                icon={<FileText className="h-5 w-5" />}
                label="Draft Trips"
                value={String(stats.draft)}
              />
            </div>

            <div className="mt-12 grid min-w-0 grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
              <section className="min-w-0">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Recent Trips
                  </h2>
                  <Link
                    to="/my-trips"
                    className="text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                  >
                    View all
                  </Link>
                </div>
                {recentTripsToShow.length === 0 ? (
                  <TripEmptyState />
                ) : (
                  <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {recentTripsToShow.map((trip) => (
                      <TripCard
                        key={trip._id}
                        destination={trip.destination}
                        dates={formatTripDates(trip.startDate, trip.endDate)}
                        budget={formatTripBudget(trip.budget)}
                        status={trip.status.toLowerCase()}
                        linkTo="/my-trips"
                      />
                    ))}
                  </div>
                )}
              </section>

              <section className="min-w-0">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Recent AI Plans
                  </h2>
                  <Link
                    to="/ai-planner"
                    className="text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                  >
                    Create new
                  </Link>
                </div>
                <div className="mt-5 space-y-4">
                  {recentPlans.map((plan) => (
                    <Card
                      key={plan.title}
                      title={plan.title}
                      description={plan.description}
                      icon={<Sparkles className="h-5 w-5" />}
                    />
                  ))}
                </div>
              </section>
            </div>

            <section className="mt-12 min-w-0">
              <div className="flex items-center gap-2">
                <Compass className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Recommended Destinations
                </h2>
              </div>
              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {recommendedDestinations.map((dest) => (
                  <Card
                    key={dest.title}
                    title={dest.title}
                    description={dest.description}
                    icon={<Map className="h-5 w-5" />}
                  />
                ))}
              </div>
            </section>

            <section className="mt-12 min-w-0">
              <div className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Activity Timeline
                </h2>
              </div>
              <div className="mt-5 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800 sm:p-8">
                {activityTimeline.length === 0 ? (
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-4">
                    No recent activity.
                  </p>
                ) : (
                  <ul className="space-y-4">
                    {activityTimeline.map((item, index) => (
                      <li
                        key={`${index}-${item.action}`}
                        className="flex min-w-0 items-start gap-4"
                      >
                        <div className="flex flex-col items-center">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-950">
                            <Clock className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                          </div>
                          {index < activityTimeline.length - 1 && (
                            <div className="mt-2 h-full w-px bg-gray-200 dark:bg-gray-700" />
                          )}
                        </div>
                        <div className="min-w-0 pb-4">
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {item.action}
                          </p>
                          <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                            {item.time}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          </>
        )}
      </div>
    </PageLayout>
  );
}

export default Dashboard;
