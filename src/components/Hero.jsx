function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
          Plan Smarter{' '}
          <span className="text-emerald-700">Eco-Tourism Adventures</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
          TravelGenie AI helps you discover sustainable destinations, build
          personalized itineraries, and travel responsibly — all powered by
          intelligent planning that balances adventure with environmental care.
        </p>
        <div className="mt-10">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-8 py-3 text-base font-semibold text-white shadow-md transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
