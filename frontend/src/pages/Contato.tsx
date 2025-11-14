import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Contato.css'; // Vamos criar este ficheiro de CSS a seguir

const Contato: React.FC = () => {
  
  // Esta função é apenas para simular o envio e prevenir que a página
  // recarregue, como pediste (não é funcional).
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensagem enviada (simulação)!');
  };

  return (
    <div className="page-container" style={{ backgroundColor: '#121212', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      {/* --- Conteúdo Principal da Página --- */}
      <main className="contato-main">
        {/* Este é o "quadradinho" que pediste */}
        <div className="contato-container">
          <h1 className="contato-title">Entre em Contato</h1>
          <p className="contato-subtitle">
            Tem alguma dúvida ou sugestão? Envie-nos uma mensagem!
          </p>
          
          <form className="contato-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome">Seu Nome</label>
              <input type="text" id="nome" className="form-input" placeholder="Digite seu nome" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Seu Email</label>
              <input type="email" id="email" className="form-input" placeholder="seu.email@exemplo.com" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea id="mensagem" className="form-textarea" rows={6} placeholder="Sua mensagem..." required></textarea>
            </div>
            
            <button type="submit" className="form-button">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contato;