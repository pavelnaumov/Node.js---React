const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/User"); // loads in executes automatically
require("./services/passport"); // loads in exectutes automatically

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app = express();

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
