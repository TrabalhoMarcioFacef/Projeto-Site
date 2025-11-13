// Caminho: frontend/src/components/TreinoCard.tsx (VERSÃO ATUALIZADA)
import React from 'react';
import './TreinoCard.css'; // O seu CSS

// 1. ATUALIZAÇÃO: As propriedades (props) mudaram
type TreinoCardProps = {
  nome: string;
  descricao: string; // Trocamos 'exercicios' por 'descricao'
};

export const TreinoCard: React.FC<TreinoCardProps> = ({ nome, descricao }) => {
  return (
    <div className="treino-card">
      <h3 className="treino-nome">{nome}</h3>
      
      {/* 2. ATUALIZAÇÃO: Mostrar a descrição */}
      <p className="treino-descricao">{descricao}</p>
      
      {/* Removemos a lista de exercícios por enquanto,
        para focar no filtro. Podemos adicioná-la de volta depois!
      */}
    </div>
  );
};