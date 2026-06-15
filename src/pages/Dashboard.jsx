import PageLayout from '../components/PageLayout.jsx';
import PageContent from '../components/PageContent.jsx';

function Dashboard() {
  return (
    <PageLayout>
      <PageContent heading="Dashboard">
        Your personalized itinerary and travel history will appear here. Soon you
        will be able to view upcoming trips, track past adventures, and manage
        your eco-friendly travel plans all in one place.
      </PageContent>
    </PageLayout>
  );
}

export default Dashboard;
