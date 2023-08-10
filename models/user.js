const mongoose = require("mongoose");

const User = mongoose.model(
  "user",
  new mongoose.Schema({
    username: String,
    password: String,
    planId: {
      type: mongoose.Schema.Types.ObjectId
    }
  }),
);

module.exports = User;
