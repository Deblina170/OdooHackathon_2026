import express from "express";
import {
  getProfile,
  updateProfile,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";

import auth from "../middleware/auth.js";
import role from "../middleware/role.js";

const router = express.Router();

// Employee/Admin
router.get("/profile", auth, getProfile);
router.put("/profile", auth, updateProfile);

// Admin Only
router.get("/", auth, role("Admin"), getAllUsers);
router.get("/:id", auth, role("Admin"), getUserById);
router.put("/:id", auth, role("Admin"), updateUser);
router.delete("/:id", auth, role("Admin"), deleteUser);

export default router;