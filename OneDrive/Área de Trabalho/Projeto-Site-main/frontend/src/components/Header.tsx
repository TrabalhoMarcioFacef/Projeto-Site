import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    // 1. Substituímos as classes Tailwind por 'header-container'
    <header className="header-container">
      <div className="header-content">
        
        {/* 2. Adicionámos a classe 'logo-link' */}
        <Link to="/" className="logo-link">
          GymApp
        </Link>

        {/* 3. Links de navegação (já usam 'nav-link') */}
        <nav className="header-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/treinos" className="nav-link">Treinos</Link>
          <a href="#contato" className="nav-link">Contato</a>
        </nav>

        {/* 4. Adicionámos a classe 'btn-matricula' */}
        <div>
          <a
            href="#matricula"
            className="btn-matricula"
          >
            Matricule-se
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;