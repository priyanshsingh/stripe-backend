const express = require("express");
const router = express.Router();
const controller = require("../controllers/auth.controller");

router
    .route("/login")
    .post(controller.login);

router
    .route("/register")
    .post(controller.register);

router
    .route("/authenticate").post();

module.exports = router;
