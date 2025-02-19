export const sendFromGemini = async (message: string): Promise<string> => {
	const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
	try {
	  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
		method: "POST",
		headers: {
		  "Content-Type": "application/json",
		},
		body: JSON.stringify({ message }),
	  });
  
	  if (!response.ok) {
		throw new Error("Error fetching response from Gemini API");
	  }
  
	  const data = await response.json();
	  return data.reply;
	} catch (error) {
	  console.error("Error communicating with Gemini API:", error);
	  return "Xin lỗi, tôi không thể trả lời vào lúc này.";
	}
  };
  