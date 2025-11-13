// Caminho: backend/routes/treinoRoutes.js (CRIAR ESTE FICHEIRO)

import express from 'express';
import { getTreinos } from '../controllers/treinoController.js';

const router = express.Router();

// Quando alguém aceder a GET /api/treinos, vai chamar a função getTreinos
router.get('/', getTreinos);

export default router;