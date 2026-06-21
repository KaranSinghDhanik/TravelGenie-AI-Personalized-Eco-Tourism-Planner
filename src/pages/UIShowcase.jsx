import { useState } from 'react';
import PageLayout from '../components/PageLayout.jsx';
import {
  Button,
  Input,
  Modal,
  Toast,
  Loader,
  showSuccess,
  showError,
  showInfo,
} from '../components/ui/index.js';
import ThemeToggle from '../components/ui/ThemeToggle.jsx';

function ShowcaseSection({ title, children }) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800 sm:p-8">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 sm:text-2xl">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function UIShowcase() {
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('invalid@');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <PageLayout>
      <Toast />

      <div className="mx-auto w-full max-w-4xl min-w-0 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
              UI Component Showcase
            </h1>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
              Preview reusable UI components from the TravelGenie AI design
              system.
            </p>
          </div>
          <ThemeToggle />
        </div>

        <div className="mt-10 space-y-8">
          <ShowcaseSection title="Button Variants">
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="primary" disabled>
                Disabled
              </Button>
            </div>
          </ShowcaseSection>

          <ShowcaseSection title="Button Sizes">
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </ShowcaseSection>

          <ShowcaseSection title="Input">
            <div className="max-w-md">
              <Input
                label="Email Address"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </ShowcaseSection>

          <ShowcaseSection title="Input with Error">
            <div className="max-w-md">
              <Input
                label="Email Address"
                type="email"
                placeholder="you@example.com"
                value={errorEmail}
                onChange={(e) => setErrorEmail(e.target.value)}
                error="Please enter a valid email address."
              />
            </div>
          </ShowcaseSection>

          <ShowcaseSection title="Modal Demo">
            <div className="flex flex-col gap-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Opens an accessible modal with Escape and overlay close support.
              </p>
              <div>
                <Button onClick={() => setIsModalOpen(true)}>
                  Open Modal
                </Button>
              </div>
            </div>
            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              title="Eco-Trip Confirmation"
            >
              <p className="mb-6">
                Your personalized eco-friendly itinerary for Kerala is ready.
                Would you like to review the sustainable travel options?
              </p>
              <div className="flex flex-wrap gap-3">
                <Button onClick={() => setIsModalOpen(false)}>
                  Confirm
                </Button>
                <Button variant="outline" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </Button>
              </div>
            </Modal>
          </ShowcaseSection>

          <ShowcaseSection title="Toast Demo">
            <div className="flex flex-wrap gap-4">
              <Button onClick={() => showSuccess('Itinerary saved successfully!')}>
                Success Toast
              </Button>
              <Button
                variant="secondary"
                onClick={() => showError('Unable to fetch destination data.')}
              >
                Error Toast
              </Button>
              <Button
                variant="outline"
                onClick={() => showInfo('Tip: Choose train travel to reduce your carbon footprint.')}
              >
                Info Toast
              </Button>
            </div>
          </ShowcaseSection>

          <ShowcaseSection title="Loader Demo">
            <div className="space-y-8">
              <div>
                <h3 className="mb-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Spinner Loader
                </h3>
                <div className="flex flex-wrap items-center gap-8">
                  <Loader variant="spinner" size="sm" />
                  <Loader variant="spinner" size="md" />
                  <Loader variant="spinner" size="lg" />
                </div>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-medium text-gray-700 dark:text-gray-300">
                  Skeleton Card Loader
                </h3>
                <div className="max-w-sm">
                  <Loader variant="skeleton" lines={3} />
                </div>
              </div>
            </div>
          </ShowcaseSection>
        </div>
      </div>
    </PageLayout>
  );
}

export default UIShowcase;
