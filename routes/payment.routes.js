const express = require("express");
const router = express.Router();
const controller = require("../controllers/payment.controller");

router
  .route("/intent")
  .post(controller.makePaymentIntent)
//   .get(controller.getPaymentIntent);

module.exports = router;
