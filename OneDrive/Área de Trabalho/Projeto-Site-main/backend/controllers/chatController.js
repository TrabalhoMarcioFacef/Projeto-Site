// Não precisamos mais da biblioteca da Google
// import { GoogleGenerativeAI } from "@google/generative-ai";
// const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

// Função helper para simular o "delay" da IA (para parecer real)
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * @desc    Recebe uma mensagem e retorna uma RESPOSTA SIMULADA
 * @route   POST /api/chat
 * @access  Public
 */
const handleChatMessage = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Nenhuma mensagem fornecida." });
    }

    // --- AQUI ESTÁ A NOSSA SIMULAÇÃO INTELIGENTE ---
    
    // Converte a mensagem para minúsculas para ser fácil de verificar
    const lowerCaseMessage = message.toLowerCase();
    let replyText = "";

    // 1. Verifica se a pergunta é sobre fitness
    if (
      lowerCaseMessage.includes('treino') ||
      lowerCaseMessage.includes('dieta') ||
      lowerCaseMessage.includes('supino') ||
      lowerCaseMessage.includes('agachamento') ||
      lowerCaseMessage.includes('proteína') ||
      lowerCaseMessage.includes('exercício')
    ) {
      // 2. Se for, envia uma resposta simulada de fitness
      replyText = `Esta é uma resposta simulada sobre "${message}". 
                   Para um treino eficaz, foque na consistência 
                   e aumente as cargas progressivamente. 
                   Não se esqueça de consumir proteína suficiente!`;
    } else {
      // 3. Se NÃO for, recusa educadamente (como pediste!)
      replyText = "Peço desculpa, mas eu sou um assistente focado " +
                  "apenas em treino e dieta. " + 
                  "Não consigo ajudar com esse assunto.";
    }

    // 4. Simula o tempo de resposta da IA (1.5 segundos)
    await sleep(1500); 

    // 5. Retorna a resposta simulada como se fosse a IA
    res.json({ reply: replyText });

  } catch (error) {
    console.error("Erro no chat controller (simulado):", error);
    res.status(500).json({ error: "Erro interno do servidor ao processar o chat." });
  }
};

export { handleChatMessage };