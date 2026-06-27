import { Link } from 'react-router-dom';
import {
  Map,
  Bookmark,
  Wallet,
  Sparkles,
  Clock,
  Compass,
  Activity,
} from 'lucide-react';
import PageLayout from '../components/PageLayout.jsx';
import StatCard from '../components/StatCard.jsx';
import TripCard from '../components/TripCard.jsx';
import Card from '../components/Card.jsx';

const recentTrips = [
  {
    destination: 'Kerala, India',
    dates: 'Mar 15 – Mar 22, 2026',
    budget: '₹42,500',
    status: 'upcoming',
  },
  {
    destination: 'Goa, India',
    dates: 'Dec 20 – Dec 27, 2025',
    budget: '₹35,000',
    status: 'completed',
  },
];

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

const activityTimeline = [
  { time: '2 hours ago', action: 'Generated Kerala itinerary' },
  { time: 'Yesterday', action: 'Saved Rajasthan Heritage Trail' },
  { time: '3 days ago', action: 'Completed Goa trip review' },
  { time: '1 week ago', action: 'Updated budget for Himachal draft' },
];

function Dashboard() {
  return (
    <PageLayout>
      <div className="mx-auto w-full min-w-0 max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="min-w-0">
          <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
            Dashboard
          </p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Welcome back!
          </h1>
          <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
            Here&apos;s an overview of your travel planning activity.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            icon={<Map className="h-5 w-5" />}
            label="Trips Planned"
            value="6"
            trend="+2 this month"
          />
          <StatCard
            icon={<Bookmark className="h-5 w-5" />}
            label="Saved Itineraries"
            value="4"
          />
          <StatCard
            icon={<Wallet className="h-5 w-5" />}
            label="Budget Overview"
            value="₹2.1L"
            trend="Across all trips"
          />
          <StatCard
            icon={<Sparkles className="h-5 w-5" />}
            label="AI Recommendations"
            value="12"
            trend="3 new"
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
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {recentTrips.map((trip) => (
                <TripCard key={trip.destination} {...trip} />
              ))}
            </div>
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
            <ul className="space-y-4">
              {activityTimeline.map((item, index) => (
                <li
                  key={item.action}
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
          </div>
        </section>
      </div>
    </PageLayout>
  );
}

export default Dashboard;
