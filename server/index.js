const express = require("express");
const app = express();

/**
 * Using dynamic port in production
 *
 * Using port 5000 for development
 */
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send({ port: PORT });
});

app.listen(PORT);
