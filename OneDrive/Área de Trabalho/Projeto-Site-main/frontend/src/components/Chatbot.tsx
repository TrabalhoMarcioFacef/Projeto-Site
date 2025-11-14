import { useState } from 'react';
import { postChatMessage } from '../servicos/api'; 
import './Chatbot.css'; // Importa o seu próprio CSS

// Define os tipos para as mensagens do chat
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
      // Envia a mensagem para a API
      const data = await postChatMessage(input);
      
      // Adiciona a resposta do modelo ao histórico
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