// Define a interface do Treino
export interface Treino {
  _id: string; 
  nome: string;
  descricao: string;
  grupoMuscular: string;
}

const API_URL = "http://localhost:3001/api";

// ... (funções getTreinos e postChatMessage) ...
export async function getTreinos(): Promise<Treino[]> {
  const response = await fetch(`${API_URL}/treinos`);
  if (!response.ok) throw new Error("Erro ao buscar treinos");
  return response.json(); 
}
export async function postChatMessage(message: string) {
  const response = await fetch(`${API_URL}/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });
  if (!response.ok) throw new Error("Erro ao enviar mensagem");
  return response.json();
}

// --- MUDANÇAS AQUI ---

// Interface para os dados do utilizador
export interface UserInfo {
  _id: string;
  name: string; // <-- CORRIGIDO AQUI
  email: string;
  token: string;
}

// Função para Registar um novo utilizador
export async function registerUser(dados: { name: string, email: string, password: string }): Promise<UserInfo> { // <-- CORRIGIDO AQUI
  const response = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dados),
  });

  if (!response.ok) {
    const erro = await response.json();
    throw new Error(erro.message || 'Erro ao registar utilizador');
  }

  return response.json();
}

// Função para fazer Login
export async function loginUser(dados: { email: string, password: string }): Promise<UserInfo> {
  const response = await fetch(`${API_URL}/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dados),
  });

  if (!response.ok) {
    const erro = await response.json();
    throw new Error(erro.message || 'Email ou senha inválidos');
  }

  return response.json();
}