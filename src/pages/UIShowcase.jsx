import { useState } from 'react';
import PageLayout from '../components/PageLayout.jsx';
import { Button, Input } from '../components/ui/index.js';
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

  return (
    <PageLayout>
      <div className="mx-auto w-full max-w-4xl min-w-0 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
              UI Component Showcase
            </h1>
            <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
              Preview reusable Button and Input components from the TravelGenie
              AI design system.
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
        </div>
      </div>
    </PageLayout>
  );
}

export default UIShowcase;
