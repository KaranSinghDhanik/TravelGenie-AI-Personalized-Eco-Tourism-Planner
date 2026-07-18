import { Router } from 'express';
import { generateItinerary } from '../controllers/aiController.js';

const router = Router();

// Route: POST /itinerary
// Action: Maps to the generateItinerary controller
router.post('/itinerary', generateItinerary);

export default router;
