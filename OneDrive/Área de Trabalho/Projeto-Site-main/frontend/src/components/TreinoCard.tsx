import React from 'react';
import './TreinoCard.css'; // O teu CSS (preto e amarelo)

type TreinoCardProps = {
  nome: string;
  descricao: string;
  nomeClassName: string; // Adicionar
  descricaoClassName: string; // Adicionar
};

export const TreinoCard: React.FC<TreinoCardProps> = ({ nome, descricao, nomeClassName, descricaoClassName }) => {
  return (
    <div className="treino-card">
      {/* Aplicar as classes vindas das props */}
      <h3 className={nomeClassName}>{nome}</h3>
      <p className={descricaoClassName}>{descricao}</p>
    </div>
  );
};