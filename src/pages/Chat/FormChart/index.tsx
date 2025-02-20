import React, { useState } from "react";
import { SendFromGemini } from "../../../services/SendFromGemini";
import style from "../../../styles/FormChart.module.css";

// Định nghĩa interface cho lịch sử tin nhắn
interface ChatMessage {
  role: "user" | "bot";
  text: string;
}

function FormChart() {
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSend = async () => {
    if (!inputText) return;
    setChatHistory((prevHistory) => [...prevHistory, { role: "user", text: inputText }]);
    setLoading(true);
    try {
      const res = await SendFromGemini(inputText);
      const contentText = res?.candidates?.[0]?.content?.parts?.[0]?.text || "Xin lỗi! Chatbot chưa trả lời được cho bạn.";

      setChatHistory((prevHistory) => [...prevHistory, { role: "bot", text: contentText }]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setInputText(""); 
    }
  };

  return (
    <div className={style.containerFormChat}>
      <div className={style.responseText}>
        {chatHistory.length === 0 ? (
          <p>Chưa có phản hồi nào...</p>
        ) : (
          chatHistory.map((message, index) => (
            <div
              key={index}
              className={`${style.chatMessage} ${
                message.role === "user" ? style.userMessage : style.botMessage
              }`}
            >
              <p>{message.text}</p>
            </div>
          ))
        )}
      </div>

      <div className={style.formInputTextContainer}>
        <input
          type="text"
          className={style.formInputText}
          placeholder="Ask ChatHT anything"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={handleSend} disabled={loading} className={style.button}>
          {loading ? "Gửi" : "Gửi"}
        </button>
      </div>
    </div>
  );
}

export default FormChart;

