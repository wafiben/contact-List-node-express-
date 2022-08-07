const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getOneUser,
  addUser,
  deleteUser,
  updateUser,
} = require("../Controllers/userController");
router.get("/user", getAllUsers);
router.post("/user", addUser);
router.delete("/user/:id", deleteUser);
router.get("/user/:id", getOneUser);
router.put("/user/:id", updateUser);

module.exports = router;
