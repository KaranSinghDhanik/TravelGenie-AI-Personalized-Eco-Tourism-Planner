import express from "express";
import {
  createTrip,
  getAllTrips,
  getTripById,
  updateTrip,
  deleteTrip,
  searchTrips,
  filterTripsByStatus,
} from "../controllers/tripController.js";

const router = express.Router();

// Static routes must be defined before /:id to avoid route conflicts
router.get("/search", searchTrips);
router.get("/status/:status", filterTripsByStatus);

router.post("/", createTrip);
router.get("/", getAllTrips);
router.get("/:id", getTripById);
router.put("/:id", updateTrip);
router.delete("/:id", deleteTrip);

export default router;
