const mongoose = require("mongoose");

const Plan = mongoose.model(
  "plan",
  new mongoose.Schema({
    plan: {
      type: String,
      enum: ["Basic", "Standard", "Premium", "Regular"],
    },
    price: {
      yearly: {
        type: Number,
      },
      monthly: {
        type: Number,
      },
    },
    videoQuality: {
      type: String,
    },
    resolution: {
      type: String,
    },
    devices: [
      {
        type: String,
      },
    ],
  }),
);

module.exports = Plan;
