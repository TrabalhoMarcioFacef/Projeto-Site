import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Treinos from './pages/Treinos';
import Contato from './pages/Contato';
import LoginPage from './pages/LoginPage'; // 1. IMPORTAR A PÁGINA DE LOGIN

import './App.css'; // Estilos globais
import './components/Chatbot.css'; // Estilos do Chatbot
import './pages/Contato.css'; // Estilos do Contato
import './pages/LoginPage.css'; // 2. IMPORTAR O CSS DO LOGIN

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/treinos" element={<Treinos />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/login" element={<LoginPage />} /> {/* 3. ADICIONAR A ROTA */}
    </Routes>
  );
}