import { GoogleGenerativeAI } from "@google/generative-ai";

// Inicializa o cliente com a chave de API do arquivo .env
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

/**
 * @desc    Recebe uma mensagem do usuário e retorna a resposta do Gemini
 * @route   POST /api/chat
 * @access  Public
 */
const handleChatMessage = async (req, res) => {
  try {
    // Pega a mensagem do corpo da requisição
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Nenhuma mensagem fornecida." });
    }

    // Define o modelo que você quer usar
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Gera o conteúdo com base na mensagem do usuário
    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text();

    // Retorna a resposta do modelo
    res.json({ reply: text });

  } catch (error) {
    console.error("Erro ao comunicar com a API do Google:", error);
    res.status(500).json({ error: "Erro interno do servidor ao processar o chat." });
  }
};

export { handleChatMessage };