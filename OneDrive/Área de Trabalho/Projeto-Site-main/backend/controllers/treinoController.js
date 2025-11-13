// Caminho: backend/controllers/treinoController.js (CRIAR ESTE FICHEIRO)

// --- DADOS MOCK (FIXOS) PARA A TUA APRESENTAÇÃO ---
// No futuro, podes trocar isto por: const treinos = await Treino.find({});
const mockTreinos = [
  { _id: '1', nome: 'Supino Reto', descricao: '3 séries de 10 repetições.', grupoMuscular: 'Peito' },
  { _id: '2', nome: 'Agachamento', descricao: '4 séries de 12 repetições.', grupoMuscular: 'Pernas' },
  { _id: '3', nome: 'Remada Curvada', descricao: '3 séries de 10 repetições.', grupoMuscular: 'Costas' },
  { _id: '4', nome: 'Desenvolvimento', descricao: '3 séries de 10 repetições.', grupoMuscular: 'Ombro' },
  { _id: '5', nome: 'Puxada Alta', descricao: '3 séries de 12 repetições.', grupoMuscular: 'Costas' },
  { _id: '6', nome: 'Leg Press', descricao: '3 séries de 15 repetições.', grupoMuscular: 'Pernas' },
];
// --------------------------------------------------


// @desc   Buscar todos os treinos
// @route  GET /api/treinos
// @access Público
const getTreinos = async (req, res) => {
  try {
    // Por agora, apenas devolvemos os dados mock
    res.status(200).json(mockTreinos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar treinos' });
  }
};

export { getTreinos };