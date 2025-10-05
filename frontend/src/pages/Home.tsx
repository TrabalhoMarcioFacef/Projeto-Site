
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Bem-vindo à FitLife Academy</h1>
          <p>Seu parceiro ideal para uma vida mais saudável e ativa. Explore nossos treinos e planos personalizados.</p>
          <div className="hero-buttons">
            <Link to="/treinos" className="btn btn-primary">Ver Treinos</Link>
            <Link to="/por-que-treinar" className="btn btn-secondary">Por Que Treinar?</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;