import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
  const { userInfo, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="header-container">
      <div className="header-content">
        
        <Link to="/" className="logo-link">
          GymApp
        </Link>

        <nav className="header-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/treinos" className="nav-link">Treinos</Link>
          <Link to="/contato" className="nav-link">Contato</Link>
        </nav>

        <div className="header-auth">
          {userInfo ? (
            <>
              {/* --- MUDANÇA AQUI --- */}
              <span className="user-welcome">Olá, {userInfo.name}!</span> 
              <button onClick={handleLogout} className="btn-logout">
                Sair
              </button>
            </>
          ) : (
            <Link to="/login" className="btn-matricula">
              Entrar / Registar
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;