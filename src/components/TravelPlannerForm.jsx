import { useEffect, useMemo, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { Input, Select, Textarea, Button } from './ui/index.js';
import { calculateEndDateFromForm, formatDateForDisplay } from '../services/tripService.js';

export const EMPTY_PLANNER_FORM = {
  destination: '',
  startDate: '',
  budget: '',
  duration: '',
  travelers: '',
  interests: '',
  style: '',
};

const durationOptions = [
  { value: '', label: 'Select duration' },
  { value: '3', label: '3 days' },
  { value: '5', label: '5 days' },
  { value: '7', label: '7 days' },
  { value: '10', label: '10 days' },
  { value: '14', label: '14 days' },
];

const styleOptions = [
  { value: '', label: 'Select travel style' },
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
 * @param {(form: object) => void | Promise<void>} [props.onSubmit] - Callback with form values on submit.
 * @param {object} [props.initialValues] - Optional initial form values (for edit mode).
 * @param {boolean} [props.isSubmitting=false] - Disables submit while a request is in progress.
 * @param {string} [props.submitLabel='Create Trip'] - Submit button label.
 * @param {string} [props.submittingLabel='Saving...'] - Submit button label while loading.
 * @param {boolean} [props.showHeader=true] - Whether to show the form header block.
 * @returns {import('react').JSX.Element}
 */
function TravelPlannerForm({
  onSubmit,
  initialValues,
  isSubmitting = false,
  submitLabel = 'Create Trip',
  submittingLabel = 'Saving...',
  showHeader = true,
}) {
  const [form, setForm] = useState(initialValues || EMPTY_PLANNER_FORM);

  useEffect(() => {
    setForm(initialValues || EMPTY_PLANNER_FORM);
  }, [initialValues]);

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const calculatedEndDate = useMemo(() => {
    if (!form.startDate || !form.duration) return '';
    const endDate = calculateEndDateFromForm(form.startDate, parseInt(form.duration, 10));
    return endDate ? formatDateForDisplay(endDate) : '';
  }, [form.startDate, form.duration]);

  const formContent = (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.(form);
      }}
    >
      <Input
        label="Destination"
        placeholder="e.g. Manali"
        value={form.destination}
        onChange={update('destination')}
      />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Input
          label="Start Date"
          type="date"
          value={form.startDate}
          onChange={update('startDate')}
        />
        <Select
          label="Trip Duration"
          value={form.duration}
          onChange={update('duration')}
          options={durationOptions}
        />
      </div>
      <div className="w-full">
        <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-200">
          End Date
        </label>
        <div className="w-full min-w-0 rounded-xl border border-gray-300 bg-gray-50 px-4 py-2.5 text-base text-gray-600 dark:border-gray-700 dark:bg-gray-900/60 dark:text-gray-400">
          {calculatedEndDate || 'Automatically calculated from start date and duration'}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Input
          label="Budget"
          placeholder="e.g. 25000"
          value={form.budget}
          onChange={update('budget')}
        />
        <Input
          label="Travelers"
          type="number"
          placeholder="e.g. 2"
          value={form.travelers}
          onChange={update('travelers')}
        />
      </div>
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
      <Button type="submit" size="lg" disabled={isSubmitting}>
        {isSubmitting ? submittingLabel : submitLabel}
      </Button>
    </form>
  );

  if (!showHeader) {
    return formContent;
  }

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
      {formContent}
    </div>
  );
}

export default TravelPlannerForm;
