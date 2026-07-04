import express from "express";

const router = express.Router();


import { register, login } from "../controllers/auth.controller.js";
// Register
router.post("/register", register);

// Login
router.post("/login", login);

export default router;

