const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ port: 5000 });
});

/**
 * Using dynamic port in production
 * 
 * Using port 5000 for development
 */
const PORT = process.env.PORT || 5000;

app.listen(PORT);
