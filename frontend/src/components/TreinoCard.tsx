import './TreinoCard.css';

type TreinoCardProps = {
  nome: string;
  exercicios: string[];
};

export function TreinoCard({ nome, exercicios }: TreinoCardProps) {
  return (
    <div className="treino-card">
      <h2>{nome}</h2>
      <ul>
        {exercicios.map((exercicio, index) => (
          <li key={index}>{exercicio}</li>
        ))}
      </ul>
    </div>
  );
}