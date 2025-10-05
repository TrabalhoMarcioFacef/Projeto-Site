<<<<<<< HEAD

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Treinos from './pages/Treinos';
import PorQueTreinar from './pages/PorQueTreinar';
import './App.css';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/treinos" element={<Treinos />} />
        <Route path="/por-que-treinar" element={<PorQueTreinar />} />
      </Routes>
    </Router>
=======
import { useEffect, useState } from "react";
import { getTreinos } from "./serviços/api";
import { TreinoCard } from "./components/TreinoCard";
import './App.css';

// Novo tipo, agora com 'exercicios'
type Treino = {
  id: number;
  nome: string;
  exercicios: string[];
};

export default function App() {
  const [treinos, setTreinos] = useState<Treino[] | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    getTreinos()
      .then(data => setTreinos(data))
      .catch(err => {
        console.error(err);
        setErro(err.message);
      });
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Gym App</h1>
        <p>Seus treinos da semana</p>
      </header>

      <main className="treinos-grid">
        {erro && <p className="erro-mensagem">{erro}</p>}
        
        {!treinos && !erro && <p>Carregando treinos...</p>}
        
        {treinos && treinos.map(treino => (
          // Agora passamos a lista de exercícios
          <TreinoCard
            key={treino.id}
            nome={treino.nome}
            exercicios={treino.exercicios}
          />
        ))}
      </main>
    </div>
>>>>>>> 151a88a1d19a67bd8a936f0020a3f4bf44f377b7
  );
}