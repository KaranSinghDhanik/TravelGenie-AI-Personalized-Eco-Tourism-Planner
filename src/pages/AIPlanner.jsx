import { useState } from 'react';
import PageLayout from '../components/PageLayout.jsx';
import PageHeader from '../components/PageHeader.jsx';
import TravelPlannerForm from '../components/TravelPlannerForm.jsx';
import AiItineraryPreview from '../components/AiItineraryPreview.jsx';
import { showSuccess, Toast } from '../components/ui/index.js';

function AIPlanner() {
  const [generated, setGenerated] = useState(true);

  const handleGenerate = () => {
    setGenerated(true);
    showSuccess('Itinerary generated! (Placeholder preview)');
  };

  return (
    <PageLayout>
      <Toast />
      <div className="mx-auto w-full min-w-0 max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <PageHeader
          title="AI Trip Planner"
          description="Describe your dream trip and let AI craft a personalized eco-friendly itinerary. No API connected yet — preview the experience below."
        />

        <div className="mt-10 grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
          <TravelPlannerForm onGenerate={handleGenerate} />
          {generated ? (
            <AiItineraryPreview />
          ) : (
            <div className="flex min-h-[400px] items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-8 dark:border-gray-700 dark:bg-gray-800/50">
              <p className="text-center text-gray-500 dark:text-gray-400">
                Fill in your trip details and click Generate Itinerary to see
                your AI-powered plan here.
              </p>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
}

export default AIPlanner;
