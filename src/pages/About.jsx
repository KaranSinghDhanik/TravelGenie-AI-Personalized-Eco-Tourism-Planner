import {
  Target,
  Eye,
  Cpu,
  Heart,
  Rocket,
} from 'lucide-react';
import PageLayout from '../components/PageLayout.jsx';
import PageHeader from '../components/PageHeader.jsx';
import Card from '../components/Card.jsx';

const techStack = [
  { title: 'React + Vite', description: 'Fast, modern frontend with component-driven architecture.' },
  { title: 'Tailwind CSS', description: 'Utility-first styling for responsive, dark-mode-ready UI.' },
  { title: 'AI Integration (Coming)', description: 'Gemini API for intelligent itinerary generation.' },
  { title: 'React Router', description: 'Seamless client-side navigation across the platform.' },
];

const whyReasons = [
  {
    title: 'Eco-First Approach',
    description: 'Every recommendation prioritizes sustainability, local communities, and low-carbon travel options.',
    icon: <Heart className="h-5 w-5" />,
  },
  {
    title: 'Personalized by AI',
    description: 'Itineraries adapt to your budget, interests, travel style, and pace — not generic templates.',
    icon: <Target className="h-5 w-5" />,
  },
  {
    title: 'Built for India',
    description: 'Focused on authentic homestays, regional destinations, and culturally rich experiences.',
    icon: <Eye className="h-5 w-5" />,
  },
];

const roadmap = [
  { phase: 'Q2 2026', item: 'Gemini API integration for live itinerary generation' },
  { phase: 'Q3 2026', item: 'Homestay booking partnerships and reviews' },
  { phase: 'Q4 2026', item: 'Mobile app with offline itinerary access' },
  { phase: '2027', item: 'Carbon footprint tracking and offset recommendations' },
];

function AboutSection({ icon, title, children }) {
  return (
    <section className="min-w-0 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800 sm:p-8">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
          {icon}
        </div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          {title}
        </h2>
      </div>
      <div className="mt-5 text-base leading-relaxed text-gray-600 dark:text-gray-400">
        {children}
      </div>
    </section>
  );
}

function About() {
  return (
    <PageLayout>
      <div className="mx-auto w-full min-w-0 max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <PageHeader
          title="About TravelGenie AI"
          description="We're building the future of intelligent, sustainable travel planning."
        />

        <div className="mt-10 space-y-6 sm:space-y-8">
          <AboutSection icon={<Target className="h-5 w-5" />} title="Mission">
            To empower travelers with AI-driven tools that make eco-tourism
            accessible, affordable, and deeply personal — helping people explore
            the world responsibly while supporting local communities.
          </AboutSection>

          <AboutSection icon={<Eye className="h-5 w-5" />} title="Vision">
            A world where every trip is thoughtfully planned, environmentally
            conscious, and culturally enriching — where technology removes the
            friction from travel planning so adventurers can focus on the
            experience.
          </AboutSection>

          <section className="min-w-0">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                <Cpu className="h-5 w-5" />
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                Technology Stack
              </h2>
            </div>
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {techStack.map((tech) => (
                <Card
                  key={tech.title}
                  title={tech.title}
                  description={tech.description}
                />
              ))}
            </div>
          </section>

          <section className="min-w-0">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              Why TravelGenie AI
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {whyReasons.map((reason) => (
                <Card
                  key={reason.title}
                  title={reason.title}
                  description={reason.description}
                  icon={reason.icon}
                />
              ))}
            </div>
          </section>

          <AboutSection icon={<Rocket className="h-5 w-5" />} title="Future Roadmap">
            <ul className="space-y-4">
              {roadmap.map((item) => (
                <li
                  key={item.item}
                  className="flex min-w-0 flex-col gap-1 border-b border-gray-100 pb-4 last:border-0 last:pb-0 dark:border-gray-700 sm:flex-row sm:items-center sm:gap-4"
                >
                  <span className="shrink-0 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
                    {item.phase}
                  </span>
                  <span>{item.item}</span>
                </li>
              ))}
            </ul>
          </AboutSection>
        </div>
      </div>
    </PageLayout>
  );
}

export default About;
