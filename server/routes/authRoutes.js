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

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/surveys"); // existing route from React App 👀
    }
  ); // the callback route ⬆️

  app.get("/api/logout", (req, res) => {
    req.logout(); // passport attaches this function to the request
    res.redirect('/');
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user); // Passport automatically attaches user to the request. neat!
  });
};
