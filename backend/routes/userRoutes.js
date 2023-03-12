const express = require("express");
const { registerUser, authUser } = require("../controllers/userControllers.js");

const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", authUser); //authuser is a middleware function

module.exports = router;
