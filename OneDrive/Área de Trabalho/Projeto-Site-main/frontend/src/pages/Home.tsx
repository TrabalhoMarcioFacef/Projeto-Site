import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

// 1. CORREÇÃO: Usar importação nomeada (com chaves {})
import { Chatbot } from "../components/Chatbot"; 

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Gym App</h1>
        <p className="text-lg mb-6">
          Treinos personalizados e dicas para melhorar sua performance!
        </p>
        <Link
          to="/treinos"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Ver Treinos
        </Link>
      </main>
      <Footer />

      {/* O Chatbot continua aqui */}
      <Chatbot />
    </div>
  );
};

export default Home;