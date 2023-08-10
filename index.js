require("dotenv").config();

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const routes = require("./routes");

const PORT = process.env.PORT;
const mongoUri = process.env.MONGO_URI;
const app = express();


mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/status", (req, res) => {
  res.send("OK");
});

app.use("/", routes);

app.listen(PORT || 8000, () => {
  console.log("Server started at port 8000");
});
