/** @format */
export const SendFromGemini = async (message: string) => {
	const API_KEY = import.meta.env.VITE_GEMINI_API_KEY; 
	try {
		const res = await fetch(
			`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ message }),
			}
		);
		if (!res.ok) throw new Error('Network response was not ok');
		return await res.json();
	} catch (error) {
		console.error('Error:', error);
		throw error;
	}
  };
  