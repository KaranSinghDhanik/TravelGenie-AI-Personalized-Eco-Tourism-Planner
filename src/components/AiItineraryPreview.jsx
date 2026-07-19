import {
  Sparkles,
  Calendar,
  Wallet,
  Home,
  MapPin,
  Backpack,
  Utensils,
  Camera,
  CloudSun,
  Leaf,
  Info,
  PhoneCall,
} from 'lucide-react';
import { Button } from './ui/index.js';

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

function AiItineraryPreview({ itinerary, onSave }) {
  if (!itinerary) return null;

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
              AI Eco Itinerary
            </h2>
          </div>
        </div>
        {itinerary.summary && (
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
            {itinerary.summary}
          </p>
        )}
      </div>

      <div className="max-h-[calc(100vh-16rem)] space-y-4 overflow-y-auto p-6">
        {/* Days */}
        {itinerary.days?.map((d) => (
          <PreviewSection
            key={d.day}
            icon={<Calendar className="h-4 w-4" />}
            title={`Day ${d.day} — ${d.title}`}
          >
            <div className="space-y-3">
              {d.activities?.map((act, idx) => (
                <div key={idx} className="border-l-2 border-emerald-500 pl-3 py-0.5">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase">
                    <span>{act.time}</span>
                    {act.duration && <span>• {act.duration}</span>}
                    {act.type && (
                      <span className="bg-emerald-50 dark:bg-emerald-950/50 px-1.5 py-0.5 rounded text-[10px] normal-case">
                        {act.type}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                    {act.activity}
                  </p>
                </div>
              ))}
            </div>
          </PreviewSection>
        ))}

        {/* Recommended Homestays */}
        {itinerary.recommendedHomestays && itinerary.recommendedHomestays.length > 0 && (
          <PreviewSection
            icon={<Home className="h-4 w-4" />}
            title="Recommended Eco Homestays"
          >
            <div className="space-y-4">
              {itinerary.recommendedHomestays.map((hs, idx) => (
                <div key={idx} className="border-b border-gray-100 last:border-0 pb-3 last:pb-0 dark:border-gray-800">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{hs.name}</h4>
                      {hs.location && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-0.5">
                          <MapPin className="h-3 w-3" /> {hs.location}
                        </p>
                      )}
                    </div>
                    <div className="text-right shrink-0">
                      {hs.pricePerNight && (
                        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                          {hs.pricePerNight}/night
                        </span>
                      )}
                      {hs.rating && (
                        <p className="text-[10px] text-gray-500 dark:text-gray-400">★ {hs.rating}</p>
                      )}
                    </div>
                  </div>
                  {hs.description && (
                    <p className="mt-1.5 text-xs text-gray-600 dark:text-gray-400">
                      {hs.description}
                    </p>
                  )}
                  {hs.ecoFeatures && hs.ecoFeatures.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {hs.ecoFeatures.map((feat, fIdx) => (
                        <span
                          key={fIdx}
                          className="bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 text-[10px] px-2 py-0.5 rounded-full"
                        >
                          🌱 {feat}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </PreviewSection>
        )}

        {/* Estimated Budget Breakdown */}
        {itinerary.budgetBreakdown && (
          <PreviewSection
            icon={<Wallet className="h-4 w-4" />}
            title="Estimated Budget Breakdown"
          >
            <ul className="space-y-1.5">
              {Object.entries(itinerary.budgetBreakdown)
                .filter(([key]) => key !== 'estimatedTotal')
                .map(([key, value]) => {
                  if (!value) return null;
                  const label = key.charAt(0).toUpperCase() + key.slice(1);
                  return (
                    <li key={key} className="flex justify-between text-gray-700 dark:text-gray-300">
                      <span>{label}</span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {typeof value === 'number' ? `₹${value.toLocaleString('en-IN')}` : value}
                      </span>
                    </li>
                  );
                })}
              {itinerary.budgetBreakdown.estimatedTotal && (
                <li className="flex justify-between border-t border-gray-200 pt-2 dark:border-gray-700">
                  <span className="font-semibold text-gray-900 dark:text-white">Total Estimated</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">
                    {typeof itinerary.budgetBreakdown.estimatedTotal === 'number'
                      ? `₹${itinerary.budgetBreakdown.estimatedTotal.toLocaleString('en-IN')}`
                      : itinerary.budgetBreakdown.estimatedTotal}
                  </span>
                </li>
              )}
            </ul>
          </PreviewSection>
        )}

        {/* Local Food to Try */}
        {itinerary.localFood && itinerary.localFood.length > 0 && (
          <PreviewSection
            icon={<Utensils className="h-4 w-4" />}
            title="Local Food to Try"
          >
            <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
              {itinerary.localFood.map((food, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-emerald-500 mt-0.5">✓</span>
                  <span>{food}</span>
                </li>
              ))}
            </ul>
          </PreviewSection>
        )}

        {/* Must Visit Places */}
        {itinerary.mustVisitPlaces && itinerary.mustVisitPlaces.length > 0 && (
          <PreviewSection
            icon={<MapPin className="h-4 w-4" />}
            title="Must Visit Places"
          >
            <ul className="space-y-1.5">
              {itinerary.mustVisitPlaces.map((place, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-emerald-500 mt-0.5">•</span>
                  <span>{place}</span>
                </li>
              ))}
            </ul>
          </PreviewSection>
        )}

        {/* Scenic Photo Spots */}
        {itinerary.photoSpots && itinerary.photoSpots.length > 0 && (
          <PreviewSection
            icon={<Camera className="h-4 w-4" />}
            title="Scenic Photo Spots"
          >
            <ul className="space-y-1.5">
              {itinerary.photoSpots.map((spot, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-emerald-500 mt-0.5">📸</span>
                  <span>{spot}</span>
                </li>
              ))}
            </ul>
          </PreviewSection>
        )}

        {/* Packing Checklist */}
        {itinerary.packingChecklist && itinerary.packingChecklist.length > 0 && (
          <PreviewSection
            icon={<Backpack className="h-4 w-4" />}
            title="Packing Checklist"
          >
            <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
              {itinerary.packingChecklist.map((item, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-emerald-500 mt-0.5">☐</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </PreviewSection>
        )}

        {/* Weather Advice */}
        {itinerary.weatherAdvice && (
          <PreviewSection
            icon={<CloudSun className="h-4 w-4" />}
            title="Weather Advice"
          >
            <div className="space-y-1">
              {itinerary.weatherAdvice.expectedWeather && (
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold text-gray-900 dark:text-white">Condition: </span>
                  {itinerary.weatherAdvice.expectedWeather}
                </p>
              )}
              {itinerary.weatherAdvice.temperature && (
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold text-gray-900 dark:text-white">Temperature: </span>
                  {itinerary.weatherAdvice.temperature}
                </p>
              )}
              {itinerary.weatherAdvice.clothingRecommendation && (
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 italic">
                  Tip: {itinerary.weatherAdvice.clothingRecommendation}
                </p>
              )}
            </div>
          </PreviewSection>
        )}

        {/* Eco Tips */}
        {itinerary.ecoTips && itinerary.ecoTips.length > 0 && (
          <PreviewSection
            icon={<Leaf className="h-4 w-4" />}
            title="Eco-Tourism Tips"
          >
            <ul className="space-y-1.5">
              {itinerary.ecoTips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-1.5 text-emerald-700 dark:text-emerald-400">
                  <span className="mt-0.5">🌱</span>
                  <span className="text-gray-600 dark:text-gray-400">{tip}</span>
                </li>
              ))}
            </ul>
          </PreviewSection>
        )}

        {/* Important Notes */}
        {itinerary.importantNotes && itinerary.importantNotes.length > 0 && (
          <PreviewSection
            icon={<Info className="h-4 w-4" />}
            title="Important Notes"
          >
            <ul className="space-y-1.5">
              {itinerary.importantNotes.map((note, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-emerald-500 mt-0.5">•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </PreviewSection>
        )}

        {/* Emergency Info */}
        {itinerary.emergencyInfo && (
          <PreviewSection
            icon={<PhoneCall className="h-4 w-4" />}
            title="Emergency Info"
          >
            <div className="space-y-1">
              {itinerary.emergencyInfo.emergencyNumber && (
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold text-gray-900 dark:text-white">Emergency No: </span>
                  <a href={`tel:${itinerary.emergencyInfo.emergencyNumber}`} className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">
                    {itinerary.emergencyInfo.emergencyNumber}
                  </a>
                </p>
              )}
              {itinerary.emergencyInfo.nearestHospital && (
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold text-gray-900 dark:text-white">Nearest Hospital: </span>
                  {itinerary.emergencyInfo.nearestHospital}
                </p>
              )}
              {itinerary.emergencyInfo.touristHelpline && (
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-semibold text-gray-900 dark:text-white">Tourist Helpline: </span>
                  {itinerary.emergencyInfo.touristHelpline}
                </p>
              )}
            </div>
          </PreviewSection>
        )}

        {/* Save Trip Button */}
        {onSave && (
          <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
            <Button variant="primary" onClick={onSave} className="w-full">
              Save Trip
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AiItineraryPreview;
