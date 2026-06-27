import {
  Sparkles,
  Calendar,
  Wallet,
  Home,
  MapPin,
  Backpack,
} from 'lucide-react';

function PreviewSection({ icon, title, children }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-gray-50/80 p-4 dark:border-gray-700 dark:bg-gray-900/50">
      <div className="mb-3 flex items-center gap-2">
        <span className="text-emerald-600 dark:text-emerald-400">{icon}</span>
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>
      <div className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
        {children}
      </div>
    </div>
  );
}

/**
 * Placeholder AI itinerary preview card for the AI Planner page.
 *
 * @returns {import('react').JSX.Element}
 */
function AiItineraryPreview() {
  return (
    <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800 lg:top-28">
      <div className="border-b border-gray-100 px-6 py-5 dark:border-gray-700">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              AI Generated
            </p>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Kerala Eco Adventure
            </h2>
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
          7-day personalized itinerary · 2 travelers · Cultural immersion
        </p>
      </div>

      <div className="max-h-[calc(100vh-12rem)] space-y-4 overflow-y-auto p-6">
        <PreviewSection
          icon={<Calendar className="h-4 w-4" />}
          title="Day 1 — Arrival in Kochi"
        >
          Explore Fort Kochi, Chinese fishing nets, and a sunset walk along the
          heritage waterfront. Check into a certified eco-homestay.
        </PreviewSection>

        <PreviewSection
          icon={<Calendar className="h-4 w-4" />}
          title="Day 2 — Munnar Tea Trails"
        >
          Scenic drive to Munnar. Visit organic tea estates, Eravikulam National
          Park, and a local spice plantation tour.
        </PreviewSection>

        <PreviewSection
          icon={<Calendar className="h-4 w-4" />}
          title="Day 3 — Backwater Experience"
        >
          Houseboat cruise through Alleppey backwaters. Village cycling and
          traditional Kerala cooking class with your host family.
        </PreviewSection>

        <PreviewSection
          icon={<Wallet className="h-4 w-4" />}
          title="Estimated Budget"
        >
          <ul className="space-y-1.5">
            <li className="flex justify-between">
              <span>Accommodation</span>
              <span className="font-medium text-gray-900 dark:text-white">₹18,500</span>
            </li>
            <li className="flex justify-between">
              <span>Transport</span>
              <span className="font-medium text-gray-900 dark:text-white">₹8,200</span>
            </li>
            <li className="flex justify-between">
              <span>Activities & Food</span>
              <span className="font-medium text-gray-900 dark:text-white">₹12,800</span>
            </li>
            <li className="flex justify-between border-t border-gray-200 pt-2 dark:border-gray-700">
              <span className="font-semibold text-gray-900 dark:text-white">Total</span>
              <span className="font-bold text-emerald-600 dark:text-emerald-400">₹39,500</span>
            </li>
          </ul>
        </PreviewSection>

        <PreviewSection
          icon={<Home className="h-4 w-4" />}
          title="Recommended Homestays"
        >
          <ul className="space-y-2">
            <li>• Green Valley Homestay, Munnar — ₹2,800/night</li>
            <li>• Backwater Heritage House, Alleppey — ₹3,200/night</li>
            <li>• Fort Kochi Eco Retreat — ₹2,400/night</li>
          </ul>
        </PreviewSection>

        <PreviewSection
          icon={<MapPin className="h-4 w-4" />}
          title="Local Attractions"
        >
          Eravikulam National Park, Mattancherry Palace, Vembanad Lake,
          Athirapally Falls, and local spice markets.
        </PreviewSection>

        <PreviewSection
          icon={<Backpack className="h-4 w-4" />}
          title="Packing Tips"
        >
          Light cotton clothing, rain jacket, comfortable walking shoes, reusable
          water bottle, sunscreen, and insect repellent for backwater areas.
        </PreviewSection>
      </div>
    </div>
  );
}

export default AiItineraryPreview;
