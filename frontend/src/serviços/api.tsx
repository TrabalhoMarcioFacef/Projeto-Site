// Função que busca os treinos da SUA API local
export async function getTreinos() {
  const response = await fetch("http://localhost:3001/api/treinos");

  if (!response.ok) {
    throw new Error("Erro ao buscar treinos do servidor");
  }

  return response.json();
}