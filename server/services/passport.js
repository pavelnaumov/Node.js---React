const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

/**
 * Service responsible for Authentication with Passport
 */

passport.serializeUser((user, done) => {
  done(null, user.id); // NOTE: not the profile.id; mongoId
});

passport.deserializeUser((id, done) => {
  // a Mongoose query
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback", // callback route to call ⬇️
      proxy: true // telling Google to Trust Proxied request
    },
    (accessToken, refreshToken, profile, done) => {
      // a Mongoose query
      User.findOne({
        googleId: profile.id
      }).then(existingUser => {
        if (existingUser) {
          // we already have the user in the db
          done(null, existingUser);
        } else {
          new User({
            googleId: profile.id
          })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);
