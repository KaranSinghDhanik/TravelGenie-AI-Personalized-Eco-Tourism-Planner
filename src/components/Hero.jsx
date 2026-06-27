import { Link } from 'react-router-dom';
import { MapPin, Sparkles, Plane } from 'lucide-react';

function TravelIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div
        className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-emerald-400/20 blur-3xl dark:bg-emerald-500/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-8 -left-6 h-40 w-40 rounded-full bg-teal-400/15 blur-3xl dark:bg-teal-500/10"
        aria-hidden="true"
      />

      <div className="relative overflow-hidden rounded-3xl border border-gray-200/80 bg-white/80 p-6 shadow-2xl shadow-gray-900/10 backdrop-blur-sm dark:border-gray-700/80 dark:bg-gray-800/80 dark:shadow-black/30 sm:p-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-950">
              <Sparkles className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                AI Trip Preview
              </p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                Kerala Eco Adventure
              </p>
            </div>
          </div>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
            7 days
          </span>
        </div>

        <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-100 via-teal-50 to-emerald-200 dark:from-emerald-950 dark:via-gray-800 dark:to-teal-950">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute left-1/4 top-1/3 h-24 w-24 rounded-full bg-emerald-300/50 blur-2xl dark:bg-emerald-600/30" />
            <div className="absolute bottom-1/4 right-1/4 h-20 w-20 rounded-full bg-teal-300/50 blur-2xl dark:bg-teal-600/30" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Plane className="h-16 w-16 rotate-[-12deg] text-emerald-600/40 dark:text-emerald-400/30" />
          </div>
          <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-xl bg-white/90 px-3 py-2 shadow-lg backdrop-blur-sm dark:bg-gray-900/90">
            <MapPin className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-xs font-medium text-gray-700 dark:text-gray-200">
              Munnar · Kochi · Wayanad
            </span>
          </div>
        </div>

        <div className="space-y-3">
          {[
            { label: 'Homestays found', value: '12 matches' },
            { label: 'Budget estimate', value: '₹42,500' },
            { label: 'Carbon score', value: 'Low impact' },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3 dark:bg-gray-900/60"
            >
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {item.label}
              </span>
              <span className="text-sm font-semibold text-gray-900 dark:text-white">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-100/40 via-transparent to-transparent dark:from-emerald-950/40"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-gray-800"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-6xl min-w-0 grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
        <div className="min-w-0 text-center lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-400">
            <Sparkles className="h-3.5 w-3.5" />
            AI-Powered Travel
          </p>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            Plan Smarter.
            <br />
            Travel Better.
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent dark:from-emerald-400 dark:to-teal-400">
              Powered by AI.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg lg:mx-0">
            Generate personalized eco-tourism itineraries, discover authentic
            homestays, and optimize your travel budget using AI.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              to="/ai-planner"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-emerald-600/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-600/30 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:bg-emerald-500 dark:shadow-emerald-500/20 dark:hover:bg-emerald-400 dark:focus:ring-offset-gray-900"
            >
              Start Planning
            </Link>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-xl border-2 border-gray-200 bg-white px-8 py-3.5 text-base font-semibold text-gray-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-gray-50 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-emerald-600 dark:hover:bg-gray-800 dark:hover:text-emerald-400 dark:focus:ring-offset-gray-900"
            >
              Learn More
            </a>
          </div>
        </div>

        <TravelIllustration />
      </div>
    </section>
  );
}

export default Hero;
