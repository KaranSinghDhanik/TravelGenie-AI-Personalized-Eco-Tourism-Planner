import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-800 via-emerald-600 to-teal-500 px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl sm:h-72 sm:w-72"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-teal-300/20 blur-3xl sm:h-72 sm:w-72"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
          Plan Smarter{' '}
          <span className="text-emerald-100">Eco-Tourism Adventures</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-emerald-50/90 sm:mt-8 sm:text-lg">
          TravelGenie AI helps you discover sustainable destinations, build
          personalized itineraries, and travel responsibly — all powered by
          intelligent planning that balances adventure with environmental care.
        </p>
        <div className="mt-10 sm:mt-12">
          <Link
            to="/login"
            className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-emerald-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-50 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-700"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
