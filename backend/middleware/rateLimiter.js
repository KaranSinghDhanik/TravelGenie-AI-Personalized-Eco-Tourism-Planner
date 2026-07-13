import rateLimit from "express-rate-limit";

/**
 * Strict rate limiter for authentication endpoints (login, register)
 * Limits requests to 5 attempts per 15 minutes per IP.
 */
export const strictAuthLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: {
    success: false,
    message: "Too many authentication attempts. Please try again after 15 minutes.",
  },
  // Ensure we send custom status code 429 (default is 429)
  statusCode: 429,
});
