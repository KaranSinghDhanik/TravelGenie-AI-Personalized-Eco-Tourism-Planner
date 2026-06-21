import { useState } from 'react';
import PageLayout from '../components/PageLayout.jsx';
import Card from '../components/Card.jsx';
import ShowcaseSection from '../components/ui/ShowcaseSection.jsx';
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

const responsiveCards = [
  {
    title: 'Eco Stays',
    description:
      'Certified green accommodations that stack in a single column on mobile.',
  },
  {
    title: 'Low-Carbon Routes',
    description:
      'Two columns on tablet and three on desktop for balanced card wrapping.',
  },
  {
    title: 'Local Guides',
    description:
      'Cards use min-w-0 and flex-wrap so content never causes horizontal scroll.',
  },
];

const breakpoints = [
  { label: 'Mobile', width: '375px', className: 'sm:hidden' },
  { label: 'Tablet', width: '768px', className: 'hidden sm:inline md:hidden' },
  { label: 'Desktop', width: '1440px', className: 'hidden md:inline' },
];

function Subheading({ children }) {
  return (
    <h3 className="mb-4 text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
      {children}
    </h3>
  );
}

function UIShowcase() {
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('invalid@');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <PageLayout>
      <Toast />

      <div className="mx-auto w-full min-w-0 max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <header className="min-w-0">
          <p className="text-sm font-medium uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Design System
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            UI Component Showcase
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-400 sm:text-lg">
            Preview reusable, dark-mode-ready components built with React and
            Tailwind CSS. Use the theme toggle in the navbar to switch modes.
          </p>
        </header>

        <div className="mt-10 space-y-6 sm:mt-12 sm:space-y-8 lg:space-y-10">
          <ShowcaseSection
            title="Buttons"
            description="Variants and sizes with full-width stacking on mobile, inline on larger screens."
          >
            <Subheading>Variants</Subheading>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="primary" disabled>
                Disabled
              </Button>
            </div>

            <Subheading>Sizes</Subheading>
            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </ShowcaseSection>

          <ShowcaseSection
            title="Inputs"
            description="Controlled inputs with labels, placeholders, and validation states."
          >
            <div className="grid min-w-0 grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              <Input
                label="Email Address"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                label="Email with Error"
                type="email"
                placeholder="you@example.com"
                value={errorEmail}
                onChange={(e) => setErrorEmail(e.target.value)}
                error="Please enter a valid email address."
              />
            </div>
          </ShowcaseSection>

          <ShowcaseSection
            title="Modal"
            description="Accessible dialog with Escape key, overlay click, and focus management."
          >
            <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              title="Eco-Trip Confirmation"
            >
              <p className="mb-6 leading-relaxed">
                Your personalized eco-friendly itinerary for Kerala is ready.
                Would you like to review the sustainable travel options?
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button onClick={() => setIsModalOpen(false)}>Confirm</Button>
                <Button
                  variant="outline"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </Button>
              </div>
            </Modal>
          </ShowcaseSection>

          <ShowcaseSection
            title="Toast"
            description="Non-blocking notifications powered by react-hot-toast."
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Button onClick={() => showSuccess('Itinerary saved successfully!')}>
                Success
              </Button>
              <Button
                variant="secondary"
                onClick={() => showError('Unable to fetch destination data.')}
              >
                Error
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  showInfo(
                    'Tip: Choose train travel to reduce your carbon footprint.'
                  )
                }
              >
                Info
              </Button>
            </div>
          </ShowcaseSection>

          <ShowcaseSection
            title="Loaders"
            description="Spinner indicators and skeleton placeholders for async content."
          >
            <div className="grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
              <div className="min-w-0">
                <Subheading>Spinner</Subheading>
                <div className="flex flex-wrap items-center gap-6 sm:gap-8">
                  <Loader variant="spinner" size="sm" />
                  <Loader variant="spinner" size="md" />
                  <Loader variant="spinner" size="lg" />
                </div>
              </div>
              <div className="min-w-0">
                <Subheading>Skeleton Card</Subheading>
                <Loader variant="skeleton" lines={3} />
              </div>
            </div>
          </ShowcaseSection>

          <ShowcaseSection
            title="Responsive Demo"
            description="Components adapt across mobile (375px), tablet (768px), and desktop (1440px) without horizontal scrolling."
          >
            <div className="mb-6 flex flex-wrap gap-2">
              {breakpoints.map(({ label, width, className }) => (
                <span
                  key={label}
                  className={`rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 ${className}`}
                >
                  {label} · {width}
                </span>
              ))}
              <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-400">
                Resize the browser to preview breakpoints
              </span>
            </div>

            <Subheading>Action Bar</Subheading>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-end sm:gap-4">
              <div className="min-w-0 flex-1 sm:max-w-xs">
                <Input
                  label="Destination"
                  placeholder="Search eco destinations"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <Button>Search Trips</Button>
              <Button variant="outline">Save Draft</Button>
            </div>

            <Subheading>Card Grid</Subheading>
            <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
              {responsiveCards.map((card) => (
                <Card key={card.title} {...card} />
              ))}
            </div>
          </ShowcaseSection>
        </div>
      </div>
    </PageLayout>
  );
}

export default UIShowcase;
