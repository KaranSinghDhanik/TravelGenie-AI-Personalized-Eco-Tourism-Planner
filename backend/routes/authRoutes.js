import express from "express";
import rateLimit from "express-rate-limit";
import passport from "passport";
import { register, login } from "../controllers/authController.js";
import { generateToken } from "../middleware/authMiddleware.js";
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

// GitHub OAuth routes
router.get("/github", passport.authenticate("github", { scope: ["user:email"], session: false }));

router.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: `${process.env.FRONTEND_URL || "http://localhost:5173"}/login`,
    session: false,
  }),
  (req, res) => {
    // Generate the same JWT currently used by the login endpoint.
    const token = generateToken(req.user._id);

    // Redirect to: FRONTEND_URL/auth/success?token=<jwt>
    const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173";
    res.redirect(`${frontendUrl}/auth/success?token=${token}`);
  }
);

export default router;
