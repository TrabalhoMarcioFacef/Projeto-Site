import express from "express";
import { handleChatMessage } from "../controllers/chatController.js";

const router = express.Router();

// Define a rota principal para o chat (POST /api/chat/)
router.post("/", handleChatMessage);

export default router;