
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage, Language } from '../types';
import { translations } from '../translations';

interface GeminiAssistantProps {
    lang: Language;
}

const GeminiAssistant: React.FC<GeminiAssistantProps> = ({ lang }) => {
  const t = translations[lang].assistant;
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  // Reset welcome message when language changes
  useEffect(() => {
    setMessages([{ role: 'model', text: t.welcome }]);
  }, [lang, t.welcome]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(userText);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: t.error, isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-50 bg-h-red text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 ${isOpen ? 'hidden' : 'flex'} items-center gap-2`}
      >
        <Bot size={28} />
        <span className="font-semibold hidden md:block">{t.trigger}</span>
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-8 right-8 z-50 w-[90vw] md:w-[400px] h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col transition-all duration-300 transform origin-bottom-right border border-gray-200 ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
        
        {/* Header */}
        <div className="bg-black text-white p-4 rounded-t-2xl flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-h-red rounded-lg">
               <Sparkles size={20} className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-lg">{t.title}</h3>
              <p className="text-xs text-gray-400">{t.subtitle}</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-h-red text-white rounded-br-none' 
                  : 'bg-white border border-gray-200 text-h-dark-gray rounded-bl-none shadow-sm'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
             <div className="flex justify-start">
             <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-2">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
             </div>
           </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-100 rounded-b-2xl">
          <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-h-red transition-all">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder={t.placeholder}
              className="flex-1 bg-transparent outline-none text-sm text-h-dark-gray"
            />
            <button 
              onClick={handleSend} 
              disabled={isLoading}
              className={`p-2 rounded-full transition-colors ${input.trim() ? 'text-h-red hover:bg-red-50' : 'text-gray-400'}`}
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeminiAssistant;
