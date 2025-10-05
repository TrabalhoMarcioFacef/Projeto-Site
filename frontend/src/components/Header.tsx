// frontend/src/components/Header.tsx

import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {"GymTrends"}
        <div className="flex items-center gap-2">
          <Link to="/" className="text-xl font-bold tracking-wide">FitLife Academy</Link>
        </div>

        {/* Navegação */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link to="/treinos" className="hover:text-yellow-400 transition-colors">Treinos</Link>
          <a href="#planos" className="hover:text-yellow-400 transition-colors">Planos</a>
          <a href="#profissionais" className="hover:text-yellow-400 transition-colors">Profissionais</a>
          <a href="#contato" className="hover:text-yellow-400 transition-colors">Contato</a>
        </nav>

        {/* Botão */}
        <div>
          <a
            href="#matricula"
            className="bg-yellow-400 text-black px-4 py-2 rounded-xl font-semibold shadow hover:bg-yellow-500 transition"
          >
            Matricule-se
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;