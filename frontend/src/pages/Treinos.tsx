
import { useEffect, useState } from "react";
import { getTreinos } from "../serviços/api";
import { TreinoCard } from "../components/TreinoCard";
import '../App.css';

type Treino = {
  id: number;
  nome: string;
  exercicios: string[];
};

export default function Treinos() {
  const [treinos, setTreinos] = useState<Treino[] | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    getTreinos()
      .then(data => setTreinos(data))
      .catch(err => {
        console.error(err);
        setErro(err.message);
      });
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Gym App</h1>
        <p>Seus treinos da semana</p>
      </header>

      <main className="treinos-grid">
        {erro && <p className="erro-mensagem">{erro}</p>}
        
        {!treinos && !erro && <p>Carregando treinos...</p>}
        
        {treinos && treinos.map(treino => (
          <TreinoCard
            key={treino.id}
            nome={treino.nome}
            exercicios={treino.exercicios}
          />
        ))}
      </main>
    </div>
  );
}