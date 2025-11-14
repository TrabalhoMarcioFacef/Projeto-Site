import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name, // <-- CORRIGIDO AQUI
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    res.json({ message: "Email ou password inválidos" });
  }
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  // 1. LER 'name' DO BODY
  const { name, email, password } = req.body; // <-- CORRIGIDO AQUI

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    res.json({ message: "Utilizador já existe" });
    return;
  }

  // 2. PASSAR 'name' PARA O MODELO
  const user = await User.create({
    name, // <-- CORRIGIDO AQUI
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name, // <-- CORRIGIDO AQUI
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    res.json({ message: "Dados de utilizador inválidos" });
  }
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id); 

  if (user) {
    res.json({
      _id: user._id,
      name: user.name, // <-- CORRIGIDO AQUI
      email: user.email,
    });
  } else {
    res.status(404);
    res.json({ message: "Utilizador não encontrado" });
  }
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name; // <-- CORRIGIDO AQUI
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name, // <-- CORRIGIDO AQUI
      email: updatedUser.email,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    res.json({ message: 'Utilizador não encontrado' });
  }
});

// Exporta TODAS as 4 funções
export { registerUser, loginUser, getUserProfile, updateUserProfile };