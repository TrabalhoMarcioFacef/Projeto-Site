import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Chatbot } from "../components/Chatbot"; // Importa o chatbot

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#121212' }}>
      <Header />
      <main 
        className="flex-grow flex flex-col items-center justify-center text-center p-6"
        // Estilo inline para garantir o fundo escuro, já que não temos Tailwind
        style={{ color: 'white' }} 
      >
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#facc15' }}>
          Bem-vindo ao GymApp
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Treinos personalizados e dicas para melhorar sua performance!
        </p>
        <Link
          to="/treinos"
          // Estilo inline para o botão principal
          style={{
            backgroundColor: '#facc15',
            color: '#111827',
            fontWeight: 'bold',
            padding: '10px 20px',
            borderRadius: '8px',
            textDecoration: 'none'
          }}
        >
          Ver Treinos
        </Link>
      </main>
      <Footer />

      {/* Adiciona o componente Chatbot aqui */}
      <Chatbot />
    </div>
  );
};

export default Home;