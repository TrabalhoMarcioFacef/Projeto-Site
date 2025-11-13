// Define a interface do Treino (usada no Treinos.tsx)
// ESTA É A FONTE DA VERDADE SOBRE O TIPO 'TREINO'
export interface Treino {
  _id: string; 
  nome: string;
  descricao: string;
  grupoMuscular: string;
}

// URL base da nossa API
const API_URL = "http://localhost:3001/api";

// Função que busca os treinos (CORRIGIDO)
export async function getTreinos(): Promise<Treino[]> {
  const response = await fetch(`${API_URL}/treinos`);

  if (!response.ok) {
    throw new Error("Erro ao buscar treinos do servidor");
  }

  // Agora o TypeScript sabe que esta função retorna uma Promise<Treino[]>
  return response.json(); 
}

// Função para o Chatbot (QUE ESTAVA FALTANDO)
export async function postChatMessage(message: string) {
  const response = await fetch(`${API_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  if (!response.ok) {
    throw new Error("Erro ao enviar mensagem para o chatbot");
  }

  // A resposta deve vir no formato { reply: "..." }
  return response.json();
}