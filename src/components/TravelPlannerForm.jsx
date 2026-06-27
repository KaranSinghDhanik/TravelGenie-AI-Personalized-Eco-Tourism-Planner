import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { Input, Select, Textarea, Button } from './ui/index.js';

const durationOptions = [
  { value: '3', label: '3 days' },
  { value: '5', label: '5 days' },
  { value: '7', label: '7 days' },
  { value: '10', label: '10 days' },
  { value: '14', label: '14 days' },
];

const styleOptions = [
  { value: 'relaxed', label: 'Relaxed & Slow' },
  { value: 'adventure', label: 'Adventure' },
  { value: 'cultural', label: 'Cultural Immersion' },
  { value: 'budget', label: 'Budget Friendly' },
  { value: 'luxury', label: 'Premium Eco-Luxury' },
];

/**
 * Travel planning form for the AI Planner page.
 *
 * @param {Object} props - Component props.
 * @param {() => void} [props.onGenerate] - Callback when Generate Itinerary is clicked.
 * @returns {import('react').JSX.Element}
 */
function TravelPlannerForm({ onGenerate }) {
  const [form, setForm] = useState({
    destination: 'Kerala, India',
    budget: '45000',
    duration: '7',
    travelers: '2',
    interests: 'Wildlife, tea plantations, backwaters, local cuisine',
    style: 'cultural',
  });

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 dark:bg-emerald-950">
          <Sparkles className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Plan Your Trip
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Tell us where you want to go
          </p>
        </div>
      </div>

      <form
        className="space-y-5"
        onSubmit={(e) => {
          e.preventDefault();
          onGenerate?.();
        }}
      >
        <Input
          label="Destination"
          placeholder="e.g. Kerala, India"
          value={form.destination}
          onChange={update('destination')}
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <Input
            label="Budget"
            placeholder="e.g. ₹45,000"
            value={form.budget}
            onChange={update('budget')}
          />
          <Select
            label="Trip Duration"
            value={form.duration}
            onChange={update('duration')}
            options={durationOptions}
          />
        </div>
        <Input
          label="Travelers"
          type="number"
          placeholder="Number of travelers"
          value={form.travelers}
          onChange={update('travelers')}
        />
        <Textarea
          label="Travel Interests"
          placeholder="Wildlife, hiking, local food, photography..."
          value={form.interests}
          onChange={update('interests')}
          rows={3}
        />
        <Select
          label="Travel Style"
          value={form.style}
          onChange={update('style')}
          options={styleOptions}
        />
        <Button type="submit" size="lg">
          Generate Itinerary
        </Button>
      </form>
    </div>
  );
}

export default TravelPlannerForm;
