// 1. IMPORTANTE: Removemos "BrowserRouter" da lista de importações
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Treinos from './pages/Treinos';
import './App.css';
import './components/Chatbot.css'; 

export default function App() {
  return (
    // 2. REMOVEMOS O <BrowserRouter> QUE ESTAVA AQUI A "ABRAÇAR"
    <Routes>
      {/* Rota para a página inicial */}
      <Route path="/" element={<Home />} />
      
      {/* Rota para a página de treinos */}
      <Route path="/treinos" element={<Treinos />} />

      {/* Adicione outras rotas aqui (ex: /planos, /contato) */}
    </Routes>
    // 3. REMOVEMOS O </BrowserRouter> QUE ESTAVA AQUI A FECHAR
  );
}