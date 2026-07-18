import { buildPrompt } from '../utils/promptBuilder.js';
import { generateTravelItinerary } from '../services/aiService.js';

/**
 * Validates whether the given value is a positive integer greater than 0.
 * Supports both actual numbers and numeric strings.
 */
function isPositiveInteger(val) {
  if (typeof val === 'number') {
    return Number.isInteger(val) && val > 0;
  }
  if (typeof val === 'string' && val.trim() !== '') {
    const trimmed = val.trim();
    // Ensure the string contains only digits and represents a positive integer
    if (/^\d+$/.test(trimmed)) {
      const num = Number(trimmed);
      return Number.isInteger(num) && num > 0;
    }
  }
  return false;
}

/**
 * Validates whether the given value is a non-empty trimmed string.
 */
function isNonEmptyString(val) {
  return typeof val === 'string' && val.trim().length > 0;
}

/**
 * Express controller handler to generate a personalized eco-tourism travel itinerary.
 * Validates request inputs strictly, constructs the prompt, invokes Gemini, and returns the response.
 * 
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 */
export async function generateItinerary(req, res) {
  try {
    const { destination, days, budget, travelStyle, interests } = req.body;
    const validationErrors = [];

    // Destination validation
    if (destination === undefined || destination === null) {
      validationErrors.push('destination is required');
    } else if (!isNonEmptyString(destination)) {
      validationErrors.push('destination must be a non-empty string');
    }

    // Days validation
    if (days === undefined || days === null) {
      validationErrors.push('days is required');
    } else if (!isPositiveInteger(days)) {
      validationErrors.push('days must be a positive integer greater than 0');
    }

    // Budget validation
    if (budget === undefined || budget === null) {
      validationErrors.push('budget is required');
    } else if (!isNonEmptyString(budget)) {
      validationErrors.push('budget must be a non-empty string');
    }

    // TravelStyle validation
    if (travelStyle === undefined || travelStyle === null) {
      validationErrors.push('travelStyle is required');
    } else if (!isNonEmptyString(travelStyle)) {
      validationErrors.push('travelStyle must be a non-empty string');
    }

    // Interests validation
    if (interests === undefined || interests === null) {
      validationErrors.push('interests is required');
    } else {
      const isString = typeof interests === 'string';
      const isArray = Array.isArray(interests);
      if (!isString && !isArray) {
        validationErrors.push('interests must be either a string or an array');
      } else if (isString && !isNonEmptyString(interests)) {
        validationErrors.push('interests must be a non-empty string');
      } else if (isArray && interests.length === 0) {
        validationErrors.push('interests array must not be empty');
      }
    }

    if (validationErrors.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Validation failed: ${validationErrors.join(', ')}.`
      });
    }

    // Build structured prompt for Gemini
    const prompt = buildPrompt({ destination, days, budget, travelStyle, interests });

    // Call the AI Service to generate the itinerary content
    const itineraryText = await generateTravelItinerary(prompt);

    // Clean markdown code blocks / fences if they exist
    const cleanJsonStr = itineraryText.replace(/^\s*```(?:json)?\s*|```\s*$/g, '').trim();

    // Attempt parsing
    let itineraryData;
    try {
      itineraryData = JSON.parse(cleanJsonStr);
    } catch (parseError) {
      // Log the complete invalid AI response to server logs
      console.error('❌ Failed to parse Gemini response as JSON. Raw output received:', itineraryText);
      console.error('Parsing error details:', parseError);

      return res.status(500).json({
        success: false,
        message: 'AI returned an invalid itinerary format.'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Travel itinerary generated successfully.',
      itinerary: itineraryData
    });

  } catch (error) {
    // Log the complete error object preserving stack traces for debugging
    console.error('Error generating itinerary:', error);

    // Return a generic client-friendly error response (HTTP 500)
    return res.status(500).json({
      success: false,
      message: 'Unable to generate itinerary at the moment.'
    });
  }
}

export default {
  generateItinerary
};
