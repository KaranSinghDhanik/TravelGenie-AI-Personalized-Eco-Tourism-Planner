import PageLayout from '../components/PageLayout.jsx';
import PageContent from '../components/PageContent.jsx';

function About() {
  return (
    <PageLayout>
      <PageContent heading="About TravelGenie AI">
        TravelGenie AI is an AI-powered eco-tourism planning platform that helps
        travelers discover sustainable destinations, build personalized itineraries,
        and make responsible travel choices. By combining intelligent recommendations
        with environmental awareness, we make it easier to explore the world while
        minimizing your footprint and supporting local communities.
      </PageContent>
    </PageLayout>
  );
}

export default About;
