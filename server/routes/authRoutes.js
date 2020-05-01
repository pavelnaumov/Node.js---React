const passport = require("passport");

/**
 * exporting routes as a function with `app` parameter
 * 
 * `app` is going to be provided in the index.js file
 */
module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google")); // the callback route ⬆️
};
