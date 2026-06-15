import { Link } from 'react-router-dom';

function CtaSection() {
  return (
    <section className="bg-gradient-to-r from-emerald-700 to-teal-600 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto w-full max-w-3xl min-w-0 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
          Ready to Plan Your Next Adventure?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-emerald-50/90 sm:text-lg">
          Start building your personalized eco-tourism itinerary today and travel
          with purpose.
        </p>
        <div className="mt-8 sm:mt-10">
          <Link
            to="/login"
            className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-emerald-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-emerald-50 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-700"
          >
            Start Planning
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
