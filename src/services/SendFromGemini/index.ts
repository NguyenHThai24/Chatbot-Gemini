import axios from "axios"

export const SendFromGemini = async(inputText: string)=>{
try {
    const apiKeyGenmini = import.meta.env.VITE_GEMINI_API_KEY; 
    if(!apiKeyGenmini){
        throw new Error('API key is not defined'); 
    }
    const res = await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKeyGenmini}`,
    {
        contents:[
            {
                parts:[{text: inputText}],
            }
        ]
    },
{
    headers:{
        'Content-Type': "application/json"
    }
})
    console.log(res.data);
    return res.data


} catch (error) {
    console.log(error);
}
}