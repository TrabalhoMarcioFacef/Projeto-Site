import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { TreinoCard } from '../components/TreinoCard';
import { getTreinos } from '../servicos/api';
import type { Treino } from '../servicos/api';

const GRUPOS_MUSCULARES = ['Todos', 'Peito', 'Costas', 'Ombro', 'Pernas'];

const Treinos: React.FC = () => {
  const [todosTreinos, setTodosTreinos] = useState<Treino[]>([]);
  const [treinosExibidos, setTreinosExibidos] = useState<Treino[]>([]);
  const [filtro, setFiltro] = useState<string>('Todos');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTreinos = async () => {
      try {
        setLoading(true);
        const data = await getTreinos();
        setTodosTreinos(data);
        setTreinosExibidos(data);
        setError(null);
      } catch (err) {
        console.error('Erro ao buscar treinos:', err);
        setError('Falha ao carregar treinos.');
      } finally {
        setLoading(false);
      }
    };
    fetchTreinos();
  }, []);

  useEffect(() => {
    if (filtro === 'Todos') {
      setTreinosExibidos(todosTreinos);
    } else {
      const treinosFiltrados = todosTreinos.filter(
        (treino) => treino.grupoMuscular.toLowerCase() === filtro.toLowerCase()
      );
      setTreinosExibidos(treinosFiltrados);
    }
  }, [filtro, todosTreinos]);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#121212' }}>
      <Header />
      <main className="flex-grow container mx-auto p-6">
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem', color: '#facc15' }}>
          Nossos Treinos
        </h1>

        {/* --- Secção de Filtros (com classes CSS) --- */}
        <div className="flex flex-wrap justify-center gap-3 mb-10" style={{ justifyContent: 'center', display: 'flex', gap: '10px', marginBottom: '40px' }}>
          {GRUPOS_MUSCULARES.map((grupo) => (
            <button
              key={grupo}
              onClick={() => setFiltro(grupo)}
              className={
                filtro === grupo ? 'filtro-btn active' : 'filtro-btn'
              }
            >
              {grupo}
            </button>
          ))}
        </div>

        {/* --- Secção de Treinos --- */}
        {loading && (
          <p className="text-center text-lg" style={{ color: '#9ca3af' }}>A carregar treinos...</p>
        )}

        {error && (
          <p className="text-center text-lg text-red-500" style={{ color: '#ff4d4d' }}>{error}</p>
        )}

        {!loading && !error && (
          <div className="treinos-grid">
            {treinosExibidos.length > 0 ? (
              treinosExibidos.map((treino) => (
                <TreinoCard
                  key={treino._id}
                  nome={treino.nome}
                  descricao={treino.descricao}
                  // Passa as classes que o TreinoCard.css espera
                  nomeClassName="treino-nome"
                  descricaoClassName="treino-descricao"
                />
              ))
            ) : (
              <p className="text-center text-lg col-span-3" style={{ color: '#9ca3af' }}>
                Nenhum treino encontrado para "{filtro}".
              </p>
            )}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Treinos;