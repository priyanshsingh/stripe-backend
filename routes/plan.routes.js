const express = require("express");
const router = express.Router();
const controller = require("../controllers/plan.controller");

router
  .route("/get")
  .get(controller.getAllPlans)
//   .get(controller.getPaymentIntent);

router
  .route("/user-plans")
  .get(controller.getUserPlans)
  .post(controller.setUserPlans)

module.exports = router;
