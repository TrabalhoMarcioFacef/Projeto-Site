import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cors());

// ROUTES
app.use("/api/users", userRoutes);

// ROTA PARA BUSCAR OS TREINOS (A PARTE QUE FALTAVA)
app.get('/api/treinos', (req, res) => {
  console.log('Recebida requisição para /api/treinos');

  const treinos = [
  { 
    id: 1, 
    nome: 'Treino A: Peito & Tríceps', 
    exercicios: [
      'Supino Reto com Barra: 4x10',
      'Supino Inclinado com Halteres: 3x12',
      'Crucifixo na Máquina: 3x15',
      'Tríceps na Polia Alta (Corda): 4x12',
      'Tríceps Francês com Halter: 3x10'
    ] 
  },
  { 
    id: 2, 
    nome: 'Treino B: Costas & Bíceps', 
    exercicios: [
      'Barra Fixa (pegada aberta): 3x até a falha',
      'Remada Curvada com Barra: 4x10',
      'Puxada Alta na Polia (pegada supinada): 3x12',
      'Rosca Direta com Barra: 4x10',
      'Rosca Alternada com Halteres: 3x12'
    ] 
  },
  { 
    id: 3, 
    nome: 'Treino C: Pernas (Completo)', 
    exercicios: [
      'Agachamento Livre: 4x8',
      'Leg Press 45°: 3x12',
      'Cadeira Extensora: 3x15',
      'Mesa Flexora: 3x12',
      'Panturrilha no Smith: 5x15'
    ] 
  },
  { 
    id: 4, 
    nome: 'Treino D: Ombros & Trapézio', 
    exercicios: [
      'Desenvolvimento Militar com Barra: 4x10',
      'Elevação Lateral com Halteres: 3x15',
      'Elevação Frontal com Halteres: 3x12',
      'Remada Alta: 3x12',
      'Encolhimento com Barra: 4x15'
    ] 
  }
];

  res.json(treinos);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, console.log(`API rodando em http://localhost:${PORT}`));