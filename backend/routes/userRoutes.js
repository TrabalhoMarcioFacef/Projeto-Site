import express from "express";
import {
  loginUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middlewares/auth.js";

const router = express.Router();

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
// ESTA É A ROTA QUE CORRIGE O ERRO 404
router.route("/").post(registerUser); 

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
router.post("/login", loginUser);

// @desc    Get & Update user profile
// @route   GET /api/users/profile
// @route   PUT /api/users/profile
// @access  Private
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;