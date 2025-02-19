
import React, { useState } from "react";
import { sendFromGemini } from "../../services/SendFromGemini/index.ts";

interface Message {
  id: number;
  content: string;
  sender: "user" | "bot";
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (input.trim() === "") return;

    const userMessage: Message = {
      id: messages.length + 1,
      content: input,
      sender: "user",
    };

    setMessages([...messages, userMessage]);
    setInput("");

    // Gửi tin nhắn và nhận phản hồi từ bot
    const botReply = await sendFromGemini(input);

    const botMessage: Message = {
      id: messages.length + 2,
      content: botReply,
      sender: "bot",
    };

    setMessages((prevMessages) => [...prevMessages, botMessage]);
  };

  return (
  <>
        <h2 >Gemini Chatbot</h2>
        <div >
          {messages.map((msg) => (
            <div key={msg.id}>
              <p >
                {msg.content}
              </p>
            </div>
          ))}
        </div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nhập tin nhắn..."
        />
        <button onClick={handleSend}>
          Gửi
        </button>
        </>
  );
};

export default Chatbot;