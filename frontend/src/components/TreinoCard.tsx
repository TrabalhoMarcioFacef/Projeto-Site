import React from 'react';
import './TreinoCard.css'; // O teu CSS (preto e amarelo) que já funciona

type TreinoCardProps = {
  nome: string;
  descricao: string;
  // Adiciona estas props:
  nomeClassName: string;
  descricaoClassName: string;
};

export const TreinoCard: React.FC<TreinoCardProps> = ({ 
  nome, 
  descricao, 
  nomeClassName, // Apanha a prop
  descricaoClassName // Apanha a prop
}) => {
  return (
    <div className="treino-card">
      {/* Aplica as classes aqui */}
      <h3 className={nomeClassName}>{nome}</h3>
      <p className={descricaoClassName}>{descricao}</p>
    </div>
  );
};