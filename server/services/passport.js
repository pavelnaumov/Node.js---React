const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

/**
 * Service responsible for Authentication with Passport
 */

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback" // callback route to call ⬇️
    },
    (accessToken, refreshToken, profile, done) => {
      console.log({ accessToken, refreshToken, profile, done }); // executed upon success; opportunity to create a user in the db
    }
  )
);
