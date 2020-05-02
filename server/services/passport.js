const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

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
      User.findOne({
        // a Mongoose query
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


//44