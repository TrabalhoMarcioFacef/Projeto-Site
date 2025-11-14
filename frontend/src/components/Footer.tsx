import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import './Footer.css'; // Vamos criar este arquivo de estilo a seguir

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        
        {/* Seção 1: Sobre o Site */}
        <div className="footer-section about">
          <h2 className="logo-text">FitCheck</h2>
          <p>
            Sua jornada para uma vida mais saudável começa aqui. Acompanhe seus treinos,
            planeje sua dieta e alcance seus objetivos.
          </p>
        </div>

        {/* Seção 2: Links Rápidos */}
        <div className="footer-section links">
          <h3>Links Rápidos</h3>
          <ul>
            <li><a href="#">Planos de Treino</a></li>
            <li><a href="#">Receitas Saudáveis</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Sobre Nós</a></li>
            <li><a href="#">Termos de Serviço</a></li>
          </ul>
        </div>

        {/* Seção 3: Redes Sociais */}
        <div className="footer-section social">
          <h3>Siga-nos</h3>
          <p>Acompanhe nossas dicas e novidades nas redes sociais!</p>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} FitCheck | Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;