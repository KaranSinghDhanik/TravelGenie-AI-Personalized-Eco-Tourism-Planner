import PageLayout from '../components/PageLayout.jsx';
import Hero from '../components/Hero.jsx';
import Card from '../components/Card.jsx';

function Home() {
  return (
    <PageLayout>
      <Hero />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
          Why TravelGenie AI?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">
          Smart tools designed for travelers who care about the planet.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:gap-8">
          <Card
            title="Personalized Itineraries"
            description="Get AI-crafted day-by-day plans tailored to your interests, pace, and eco-friendly preferences — from hidden trails to green-certified stays."
          />
          <Card
            title="Budget Planning"
            description="Estimate costs, compare sustainable options, and stay on track with smart budget insights that help you travel more while spending wisely."
          />
        </div>
      </section>
    </PageLayout>
  );
}

export default Home;
