import express from "express";
import dotenv from "dotenv"; // <-- ESTA É A LINHA QUE ESTAVA A FALTAR
import cors from "cors";

import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import chatRoutes from "./routes/chatRoutes.js"; // Rota do chatbot

// Carrega as variáveis de ambiente (linha que deu o erro)
dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// --- NOSSAS ROTAS ---
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes); // Rota do chatbot

// --- ROTA DE TREINOS (ATUALIZADA PARA OS FILTROS) ---
app.get('/api/treinos', (req, res) => {
  console.log('Recebida requisição para /api/treinos (v2 com filtros)');

  const treinos = [
    { 
      _id: '1', 
      nome: 'Treino A: Peito & Tríceps',
      descricao: 'Foco em hipertrofia para peitoral e tríceps.',
      grupoMuscular: 'Peito' 
    },
    { 
      _id: '2', 
      nome: 'Treino B: Costas & Bíceps',
      descricao: 'Desenvolvimento de largura e espessura das costas.',
      grupoMuscular: 'Costas' 
    },
    { 
      _id: '3', 
      nome: 'Treino C: Pernas (Completo)',
      descricao: 'Treino completo para quadríceps, posteriores e panturrilhas.',
      grupoMuscular: 'Pernas' 
    },
    { 
      _id: '4', 
      nome: 'Treino D: Ombros & Trapézio',
      descricao: 'Foco em deltoides laterais, frontais e posteriores.',
      grupoMuscular: 'Ombro' 
    },
    { 
      _id: '5', 
      nome: 'Treino E: Peito (Foco Força)',
      descricao: 'Treino de baixa repetição focado em força bruta.',
      grupoMuscular: 'Peito' 
    }
  ];

  res.json(treinos);
});


// --- INICIAR O SERVIDOR ---
const PORT = process.env.PORT || 3001;
app.listen(PORT, console.log(`API rodando em http://localhost:${PORT}`));