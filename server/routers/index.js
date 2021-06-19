const express = require("express");
const {
  saveUser,
  deleteUserById,
  getAllUsers,
  getUserById,
  updateUserById,
} = require("../controllers/index");

const router = express.Router();

router.post("/users", saveUser);
router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUserById);
router.delete("/users/:id", deleteUserById);
