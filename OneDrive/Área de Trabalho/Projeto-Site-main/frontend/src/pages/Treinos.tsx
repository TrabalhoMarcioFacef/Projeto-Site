import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { TreinoCard } from '../components/TreinoCard';

// 1. CORREÇÃO:
// Importamos o VALOR (a função)
import { getTreinos } from '../servicos/api';  
// Importamos o TIPO (a interface) em separado
import type { Treino } from '../servicos/api'; 

// Lista dos filtros
const GRUPOS_MUSCULARES = ['Todos', 'Peito', 'Costas', 'Ombro', 'Pernas'];

const Treinos: React.FC = () => {
  // O resto do teu componente está PERFEITO!
  const [todosTreinos, setTodosTreinos] = useState<Treino[]>([]);
  const [treinosExibidos, setTreinosExibidos] = useState<Treino[]>([]);
  const [filtro, setFiltro] = useState<string>('Todos');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Busca os treinos da API
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

  // Aplica o filtro
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
        <h1 className="text-4xl font-bold mb-6 text-center">Nossos Treinos</h1>

        {/* --- Secção de Filtros --- */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {GRUPOS_MUSCULARES.map((grupo) => (
            <button
              key={grupo}
              onClick={() => setFiltro(grupo)}
              className={`
                py-2 px-4 rounded font-bold transition-colors
                ${filtro === grupo
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }
              `}
            >
              {grupo}
            </button>
          ))}
        </div>

        {/* --- Secção de Treinos --- */}
        {loading && (
          <p className="text-center text-lg">A carregar treinos...</p>
        )}

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
                  descricao={treino.descricao}
                />
              ))
            ) : (
              <p className="text-center text-lg col-span-3">
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