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
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

// Apply JWT authentication middleware to all trip routes
router.use(verifyToken);

// Static routes must be defined before /:id to avoid route conflicts
router.get("/search", searchTrips);
router.get("/status/:status", filterTripsByStatus);

router.post("/", createTrip);
router.get("/", getAllTrips);
router.get("/:id", getTripById);
router.put("/:id", updateTrip);
router.delete("/:id", deleteTrip);

export default router;
