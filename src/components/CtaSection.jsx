import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function CtaSection() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto w-full max-w-6xl min-w-0">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-600 px-6 py-16 text-center shadow-2xl shadow-emerald-900/20 sm:px-12 sm:py-20 dark:from-emerald-700 dark:via-emerald-800 dark:to-teal-800 dark:shadow-emerald-950/40">
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-teal-300/20 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready for your next adventure?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-emerald-50/90 sm:text-lg">
              Let AI build your perfect eco-friendly itinerary in minutes — no
              spreadsheets, no guesswork.
            </p>
            <div className="mt-10">
              <Link
                to="/ai-planner"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-emerald-700 shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-50 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-700"
              >
                Generate My Trip
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
