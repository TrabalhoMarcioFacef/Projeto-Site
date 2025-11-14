// Caminho: backend/models/Treino.js (CRIAR ESTE FICHEIRO)

import mongoose from 'mongoose';

const treinoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  // Este campo é a chave para os filtros
  grupoMuscular: {
    type: String,
    required: true,
    enum: ['Peito', 'Costas', 'Pernas', 'Ombro', 'Braço'], // Ajusta se precisares
  },
});

const Treino = mongoose.model('Treino', treinoSchema);

export default Treino;