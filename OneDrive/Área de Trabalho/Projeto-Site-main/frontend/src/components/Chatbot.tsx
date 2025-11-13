import { useState } from 'react';
// 1. CORREÇÃO: Importar do caminho certo (servicos/api.ts)
import { postChatMessage } from '../servicos/api'; 

// ... (o resto do seu ficheiro Chatbot.tsx está PERFEITO)
type ChatMessage = {
  role: 'user' | 'model';
  text: string;
};

export const Chatbot = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setHistory(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // 2. CORREÇÃO: Sem erros aqui agora!
      const data = await postChatMessage(input);
      const modelMessage: ChatMessage = { role: 'model', text: data.reply };
      setHistory(prev => [...prev, modelMessage]);

    } catch (error) {
      console.error(error);
      const errorMessage: ChatMessage = { 
        role: 'model', 
        text: 'Desculpe, não consegui me conectar. Tente novamente.' 
      };
      setHistory(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // O seu JSX aqui está ótimo
    <div className="chatbot-container">
      <div className="chatbot-header">
        <h2>Chatbot de Treino 🤖</h2>
        <p>Tire suas dúvidas sobre exercícios!</p>
      </div>
      <div className="chatbot-history">
        {history.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.role}`}>
            {msg.text}
          </div>
        ))}
        {isLoading && (
          <div className="chat-message model">
            Digitando...
          </div>
        )}
      </div>
      <form className="chatbot-input-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Pergunte algo sobre seu treino..."
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading}>
          Enviar
        </button>
      </form>
    </div>
  );
};