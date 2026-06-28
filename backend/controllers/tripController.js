import Trip, { TRIP_STATUSES, TRAVEL_STYLES } from "../models/Trip.js";
import { isValidObjectId } from "../utils/objectId.js";

/**
 * Build a consistent success response payload.
 */
function successResponse(res, statusCode, message, data) {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
}

/**
 * Build a consistent error response payload.
 */
function errorResponse(res, statusCode, message) {
  return res.status(statusCode).json({
    success: false,
    message,
  });
}

/**
 * Validate required trip fields for create operations.
 */
function validateCreatePayload(body) {
  const errors = [];

  if (!body.destination || !String(body.destination).trim()) {
    errors.push("Destination is required");
  }

  if (!body.startDate) {
    errors.push("Start date is required");
  }

  if (!body.endDate) {
    errors.push("End date is required");
  }

  if (body.budget === undefined || body.budget === null || body.budget === "") {
    errors.push("Budget is required");
  } else if (Number(body.budget) < 0) {
    errors.push("Budget must be greater than or equal to 0");
  }

  if (body.travelers === undefined || body.travelers === null || body.travelers === "") {
    errors.push("Travelers is required");
  } else if (Number(body.travelers) < 1) {
    errors.push("Travelers must be at least 1");
  }

  if (body.travelStyle && !TRAVEL_STYLES.includes(body.travelStyle)) {
    errors.push(`Travel style must be one of: ${TRAVEL_STYLES.join(", ")}`);
  }

  if (body.status && !TRIP_STATUSES.includes(body.status)) {
    errors.push(`Status must be one of: ${TRIP_STATUSES.join(", ")}`);
  }

  if (body.interests !== undefined && !Array.isArray(body.interests)) {
    errors.push("Interests must be an array of strings");
  }

  return errors;
}

/**
 * Validate optional fields for update operations.
 */
function validateUpdatePayload(body) {
  const errors = [];

  if (body.destination !== undefined && !String(body.destination).trim()) {
    errors.push("Destination cannot be empty");
  }

  if (body.budget !== undefined && Number(body.budget) < 0) {
    errors.push("Budget must be greater than or equal to 0");
  }

  if (body.travelers !== undefined && Number(body.travelers) < 1) {
    errors.push("Travelers must be at least 1");
  }

  if (body.travelStyle !== undefined && !TRAVEL_STYLES.includes(body.travelStyle)) {
    errors.push(`Travel style must be one of: ${TRAVEL_STYLES.join(", ")}`);
  }

  if (body.status !== undefined && !TRIP_STATUSES.includes(body.status)) {
    errors.push(`Status must be one of: ${TRIP_STATUSES.join(", ")}`);
  }

  if (body.interests !== undefined && !Array.isArray(body.interests)) {
    errors.push("Interests must be an array of strings");
  }

  return errors;
}

/**
 * POST /api/trips — Create a new trip.
 */
export async function createTrip(req, res) {
  try {
    const validationErrors = validateCreatePayload(req.body);

    if (validationErrors.length > 0) {
      return errorResponse(res, 400, validationErrors.join(", "));
    }

    const trip = await Trip.create({
      destination: String(req.body.destination).trim(),
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      budget: Number(req.body.budget),
      travelers: Number(req.body.travelers),
      travelStyle: req.body.travelStyle,
      interests: req.body.interests || [],
      status: req.body.status || "Draft",
      estimatedCost: req.body.estimatedCost ?? 0,
      generatedItinerary: req.body.generatedItinerary ?? "",
      recommendedHomestays: req.body.recommendedHomestays || [],
      packingChecklist: req.body.packingChecklist || [],
    });

    return successResponse(res, 201, "Trip created successfully", { trip });
  } catch (error) {
    return errorResponse(res, 400, error.message);
  }
}

/**
 * GET /api/trips — Retrieve all trips.
 */
export async function getAllTrips(req, res) {
  try {
    const trips = await Trip.find().sort({ createdAt: -1 });

    return successResponse(res, 200, "Trips retrieved successfully", {
      count: trips.length,
      trips,
    });
  } catch (error) {
    return errorResponse(res, 500, error.message);
  }
}

/**
 * GET /api/trips/:id — Retrieve a single trip by ID.
 */
export async function getTripById(req, res) {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return errorResponse(res, 400, "Invalid trip ID format");
    }

    const trip = await Trip.findById(id);

    if (!trip) {
      return errorResponse(res, 404, "Trip not found");
    }

    return successResponse(res, 200, "Trip retrieved successfully", { trip });
  } catch (error) {
    return errorResponse(res, 500, error.message);
  }
}

/**
 * PUT /api/trips/:id — Update an existing trip.
 */
export async function updateTrip(req, res) {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return errorResponse(res, 400, "Invalid trip ID format");
    }

    const validationErrors = validateUpdatePayload(req.body);

    if (validationErrors.length > 0) {
      return errorResponse(res, 400, validationErrors.join(", "));
    }

    const trip = await Trip.findById(id);

    if (!trip) {
      return errorResponse(res, 404, "Trip not found");
    }

    const updatableFields = [
      "destination",
      "startDate",
      "endDate",
      "budget",
      "travelers",
      "travelStyle",
      "interests",
      "status",
      "estimatedCost",
      "generatedItinerary",
      "recommendedHomestays",
      "packingChecklist",
    ];

    updatableFields.forEach((field) => {
      if (req.body[field] !== undefined) {
        trip[field] = field === "destination" ? String(req.body[field]).trim() : req.body[field];
      }
    });

    await trip.save();

    return successResponse(res, 200, "Trip updated successfully", { trip });
  } catch (error) {
    return errorResponse(res, 400, error.message);
  }
}

/**
 * DELETE /api/trips/:id — Delete a trip.
 */
export async function deleteTrip(req, res) {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      return errorResponse(res, 400, "Invalid trip ID format");
    }

    const trip = await Trip.findByIdAndDelete(id);

    if (!trip) {
      return errorResponse(res, 404, "Trip not found");
    }

    return successResponse(res, 200, "Trip deleted successfully", { trip });
  } catch (error) {
    return errorResponse(res, 500, error.message);
  }
}

/**
 * GET /api/trips/search?destination= — Search trips by destination.
 */
export async function searchTrips(req, res) {
  try {
    const { destination } = req.query;

    if (!destination || !String(destination).trim()) {
      return errorResponse(res, 400, "Search query parameter 'destination' is required");
    }

    const trips = await Trip.find({
      destination: { $regex: String(destination).trim(), $options: "i" },
    }).sort({ createdAt: -1 });

    return successResponse(res, 200, "Trips search completed successfully", {
      count: trips.length,
      trips,
    });
  } catch (error) {
    return errorResponse(res, 500, error.message);
  }
}

/**
 * GET /api/trips/status/:status — Filter trips by status.
 */
export async function filterTripsByStatus(req, res) {
  try {
    const { status } = req.params;

    if (!TRIP_STATUSES.includes(status)) {
      return errorResponse(
        res,
        400,
        `Invalid status. Must be one of: ${TRIP_STATUSES.join(", ")}`
      );
    }

    const trips = await Trip.find({ status }).sort({ createdAt: -1 });

    return successResponse(res, 200, `Trips with status '${status}' retrieved successfully`, {
      count: trips.length,
      trips,
    });
  } catch (error) {
    return errorResponse(res, 500, error.message);
  }
}
