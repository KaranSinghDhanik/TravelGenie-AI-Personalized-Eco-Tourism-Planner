import express from "express";
import passport from "passport";
import { register, login, getMe } from "../controllers/authController.js";
import { generateToken, protect } from "../middleware/authMiddleware.js";
import { strictAuthLimiter } from "../middleware/rateLimiter.js";
import {
  registerValidation,
  loginValidation,
  validate,
} from "../middleware/validation.js";

const router = express.Router();

router.post("/register", strictAuthLimiter, registerValidation, validate, register);
router.post("/login", strictAuthLimiter, loginValidation, validate, login);

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

// Authenticated User Profile route
router.get("/me", protect, getMe);

export default router;
