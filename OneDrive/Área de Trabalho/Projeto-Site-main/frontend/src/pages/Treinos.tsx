import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { TreinoCard } from '../components/TreinoCard';
import { getTreinos } from '../servicos/api';
import type { Treino } from '../servicos/api';

const GRUPOS_MUSCULARES = ['Todos', 'Peito', 'Costas', 'Ombro', 'Pernas'];

const Treinos: React.FC = () => {
  const [todosTreinos, setTodosTreinos] = useState<Treino[]>([]);
  // ... (toda a tua lógica de state e useEffect fica igual)
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
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Nossos Treinos
        </h1>

        {/* --- ALTERAÇÕES AQUI --- */}
        {/* Secção de Filtros (Novo Visual "Dark Mode" + Amarelo) */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
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
        {/* --- FIM DAS ALTERAÇÕES --- */}

        {/* Secção de Treinos (sem alterações) */}
        {loading && (
          <p className="text-center text-lg text-gray-500">A carregar treinos...</p>
        )}
        {/* ... (o resto do teu JSX fica igual) ... */}
        {error && (
          <p className="text-center text-lg text-red-500">{error}</p>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treinosExibidos.length > 0 ? (
              treinosExibidos.map((treino) => (
                <TreinoCard
                  key={treino._id}
                  nome={treino.nome}
                  // O teu TreinoCard.css espera estas classes para o tema funcionar
                  nomeClassName="treino-nome" 
                  descricaoClassName="treino-descricao"
                  descricao={treino.descricao}
                />
              ))
            ) : (
              <p className="text-center text-lg text-gray-500 col-span-3">
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