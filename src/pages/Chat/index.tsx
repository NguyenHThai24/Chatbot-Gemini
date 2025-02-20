import { useEffect, useState } from "react";
import { SendFromGemini } from "../../services/SendFromGemini";

// interface FormChartProps {
//    inputText: string
// }

function FormChart() {
    const [responseText, setResponseText] = useState<string>('');
    const [inputText, setInputText] = useState<string>('');
    const [loading, setLoading]  = useState<boolean>(false)

   
        const handleSend = async () => {
            if(!inputText) return;
            setLoading(true)
            setResponseText("")
            try {
                const res = await SendFromGemini(inputText);
                console.log(res);
                const contentText = res?.candidates?.[0]?.content?.parts?.[0]?.text;
                if (contentText) {
                setResponseText(contentText);
                }else{
                    setResponseText("Xin lỗi! Gemini chưa trả lời được cho bạn.")
                }
            } catch (error) {
                console.log(error);
            } finally{
                setLoading(false)
            }
        }
       
    useEffect(()=>{
            handleSend()
    }, []);

    return (
        <div>
          <h1>Chat Gemini Example</h1>
          <textarea className=""
          placeholder="Nhập câu hỏi của bạn..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}></textarea>

          <button onClick={handleSend} disabled={loading}>
            {loading ? "loading..." : "Gửi"}
          </button>
          {responseText && (
            <div>
              <strong>Response:</strong>
              <p>{responseText}</p>
            </div>
          )}
        </div>
      );
      
}

export default FormChart;