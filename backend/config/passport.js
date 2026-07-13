import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";
import User from "../models/User.js";

/**
 * Configure Passport serialization, deserialization, and GitHub strategy.
 */
export function configurePassport() {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      done(err, null);
    }
  });

  // Check if GITHUB client ID and secret are configured
  if (!process.env.GITHUB_CLIENT_ID || !process.env.GITHUB_CLIENT_SECRET) {
    console.warn("⚠️ GITHUB_CLIENT_ID or GITHUB_CLIENT_SECRET is missing. GitHub OAuth strategy registration skipped.");
    return;
  }

  passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: "/api/auth/github/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          let email = profile.emails && profile.emails[0] ? profile.emails[0].value : null;

          if (!email) {
            try {
              const response = await fetch("https://api.github.com/user/emails", {
                headers: {
                  Authorization: `Bearer ${accessToken}`,
                  "User-Agent": "TravelGenie-AI",
                  Accept: "application/vnd.github+json",
                },
              });
              if (response.ok) {
                const emails = await response.json();
                if (Array.isArray(emails)) {
                  const primaryVerified = emails.find(e => e.verified && e.primary);
                  if (primaryVerified) {
                    email = primaryVerified.email;
                  } else {
                    const anyVerified = emails.find(e => e.verified);
                    if (anyVerified) {
                      email = anyVerified.email;
                    }
                  }
                }
              }
            } catch (fetchError) {
              console.error("Error fetching emails from GitHub:", fetchError);
            }
          }

          if (!email) {
            return done(new Error("No email associated with GitHub account"), null);
          }

          let user = await User.findOne({ email });

          if (!user) {
            user = await User.create({
              name: profile.displayName || profile.username || "GitHub User",
              email: email,
              authProvider: "github",
            });
          }

          return done(null, user);
        } catch (err) {
          return done(err, null);
        }
      }
    )
  );
}
