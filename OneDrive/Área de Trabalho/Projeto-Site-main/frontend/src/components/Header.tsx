// Caminho: frontend/src/components/Header.tsx

import React from 'react';
// 1. Importar o Link
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <div className="text-lg font-bold">GymApp</div>
        <div>
          {/* 2. Substituir <a> por <Link> e href por to */}
          <Link to="/" className="px-3">
            Home
          </Link>
          <Link to="/treinos" className="px-3">
            Treinos
          </Link>
          <Link to="/contato" className="px-3">
            Contato
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;