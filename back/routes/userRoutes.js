const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getUser,
} = require("../controller/userController");

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/getuser", getUser);

module.exports = router;
