/** @format */
export const SendFromGemini = (message: string) => {
	const API_KEY = import.meta.env.VITE_GEMINI_API_KEY; // Lấy API key từ .env
	return fetch(
		`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
		{
			headers: {},
			body: JSON.stringify(message),
		}
	).then((res) => res.json());
	// .then((res) => res.data);
};
