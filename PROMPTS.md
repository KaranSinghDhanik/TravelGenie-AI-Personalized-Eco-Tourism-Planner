# PROMPTS.md

# TravelGenie AI – Prompt Engineering Log

## AI Feature

Generate a personalized eco-tourism travel itinerary based on user preferences.

---

# Prompt Version 1

## Prompt

Generate a travel itinerary for a trip to {destination} for {days} days with a budget of {budget}. The traveler prefers {travelStyle} travel and is interested in {interests}.

## Result

The itinerary was too generic.
It lacked proper structure and often returned inconsistent formatting.

---

# Prompt Version 2

## Prompt

You are an expert eco-tourism travel planner.

Create a detailed itinerary including:

- Day-wise activities
- Budget suggestions
- Eco-friendly travel recommendations
- Local food recommendations
- Packing checklist
- Important travel notes

## Result

The quality improved significantly.

However, the AI sometimes returned Markdown instead of structured JSON, making parsing difficult.

---

# Prompt Version 3 (Final)

## Prompt

You are an expert eco-tourism travel planner.

Generate ONLY valid JSON.

Return the following structure:

- summary
- days
- recommendedHomestays
- budgetBreakdown
- localFood
- mustVisitPlaces
- photoSpots
- packingChecklist
- weatherAdvice
- ecoTips
- importantNotes
- emergencyInfo

Do not include Markdown or explanations.

## Example Input

Destination:
Manali

Days:
5

Budget:
25000

Travel Style:
Adventure

Interests:
Hiking, Photography, Local Food

## Example Output

A structured JSON itinerary containing:

- Summary
- Day-wise travel plan
- Recommended homestays
- Budget allocation
- Food recommendations
- Eco-friendly tips
- Emergency contacts
- Packing checklist

---

# Best Prompt

Prompt Version 3 produced the most reliable results.

By explicitly instructing the AI to return only valid JSON and specifying the expected schema, the backend could parse the response consistently without additional cleanup. It also reduced formatting errors such as Markdown code fences and unnecessary explanations, making the integration more robust and suitable for production use.

---

# System Role

You are an expert eco-tourism travel planner specializing in personalized, sustainable, and budget-aware travel itineraries.