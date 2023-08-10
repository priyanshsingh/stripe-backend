const express = require("express");
const router = express.Router();
const paymentRoutes = require("./payment.routes");
const authRoutes = require("./auth.routes");
const planRoutes = require("./plan.routes");

router.use("/payment", paymentRoutes);
router.use("/auth", authRoutes);
router.use("/plan", planRoutes);

module.exports = router;
