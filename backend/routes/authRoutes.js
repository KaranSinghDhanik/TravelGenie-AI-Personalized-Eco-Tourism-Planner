import express from "express";
import rateLimit from "express-rate-limit";
import { register, login } from "../controllers/authController.js";
import {
  registerValidation,
  loginValidation,
  validateRequest,
} from "../validators/authValidator.js";

const router = express.Router();

/**
 * Rate limiter for authentication routes to reduce brute-force attempts.
 */
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many authentication attempts. Please try again later.",
  },
});

router.use(authLimiter);

router.post("/register", registerValidation, validateRequest, register);
router.post("/login", loginValidation, validateRequest, login);

export default router;
