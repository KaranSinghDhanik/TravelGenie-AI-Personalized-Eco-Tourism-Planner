import mongoose from "mongoose";

const TRAVEL_STYLES = ["Budget", "Luxury", "Adventure", "Family", "Solo"];
const TRIP_STATUSES = ["Draft", "Upcoming", "Completed", "Cancelled"];

const tripSchema = new mongoose.Schema(
  {
    destination: {
      type: String,
      required: [true, "Destination is required"],
      trim: true,
    },
    startDate: {
      type: Date,
      required: [true, "Start date is required"],
    },
    endDate: {
      type: Date,
      required: [true, "End date is required"],
    },
    budget: {
      type: Number,
      required: [true, "Budget is required"],
      min: [0, "Budget must be greater than or equal to 0"],
    },
    travelers: {
      type: Number,
      required: [true, "Number of travelers is required"],
      min: [1, "Travelers must be at least 1"],
    },
    travelStyle: {
      type: String,
      enum: {
        values: TRAVEL_STYLES,
        message: `Travel style must be one of: ${TRAVEL_STYLES.join(", ")}`,
      },
    },
    interests: {
      type: [String],
      default: [],
    },
    status: {
      type: String,
      enum: {
        values: TRIP_STATUSES,
        message: `Status must be one of: ${TRIP_STATUSES.join(", ")}`,
      },
      default: "Draft",
    },
    // AI-ready fields (populated by future Gemini integration)
    estimatedCost: {
      type: Number,
      default: 0,
    },
    generatedItinerary: {
      type: String,
      default: "",
    },
    recommendedHomestays: {
      type: [String],
      default: [],
    },
    packingChecklist: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Trip = mongoose.model("Trip", tripSchema);

export { TRAVEL_STYLES, TRIP_STATUSES };
export default Trip;
