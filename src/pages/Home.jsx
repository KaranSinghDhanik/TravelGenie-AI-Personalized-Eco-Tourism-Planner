import PageLayout from '../components/PageLayout.jsx';
import Hero from '../components/Hero.jsx';
import WhyChoose from '../components/WhyChoose.jsx';
import HowItWorks from '../components/HowItWorks.jsx';
import CtaSection from '../components/CtaSection.jsx';

function Home() {
  return (
    <PageLayout>
      <Hero />
      <WhyChoose />
      <HowItWorks />
      <CtaSection />
    </PageLayout>
  );
}

export default Home;
