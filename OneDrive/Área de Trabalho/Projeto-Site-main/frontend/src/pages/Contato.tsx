// Caminho: frontend/src/pages/Contato.tsx (CRIAR ESTE FICHEIRO)

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contato: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-4xl font-bold mb-4">Página de Contato</h1>
        <p className="text-lg mb-6">
          Coloca aqui as tuas informações ou formulário.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Contato;