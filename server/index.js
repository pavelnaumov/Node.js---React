const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
const bodyParser = require("body-parser");
require("./models/User"); // loads in and executes automatically
require("./services/passport"); // loads in and exectutes automatically

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // how long it exists,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app); // auth routes
require("./routes/billingRoutes")(app); // billing routes

/**
 * Node Configuration for Production
 */

if (process.env.NODE_ENV === "production") {
  // 1. Telling Node to serve the production assets
  // 2. Telling Express to serve index.html if the routes aren't recognized (Express vs React routes)

  app.use(express.static("client/build")); // 1

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html")); // 2
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
