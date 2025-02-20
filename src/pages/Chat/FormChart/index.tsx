import { useEffect, useState } from "react";
import { SendFromGemini } from "../../../services/SendFromGemini";
import style from "../../../styles/FormChart.module.css"


function FormChart() {
    const [responseText, setResponseText] = useState<string>('');
    const [inputText, setInputText] = useState<string>('');
    const [loading, setLoading]  = useState<boolean>(false)

        const handleSend = async () => {
            if(!inputText) return;
            setLoading(true)
            // setResponseText("")
            try {
                const res = await SendFromGemini(inputText);
                
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
        <div className={style.container}>
          <h3 className={style.title}>Chatbot HT</h3>
          <div className={style.content}>
            {responseText && (
              <div>
                {/* <strong>Response:</strong> */}
                <p>{responseText}</p>
              </div>
            )}
          </div>
          <div>
            <textarea className={style.formInputText}
            placeholder="Nhập câu hỏi của bạn..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}></textarea>

            <button onClick={handleSend} disabled={loading} className={style.button}>
              {loading ? "loading..." : "Gửi"}
            </button>
          </div>
        </div>
      );
      
}

export default FormChart;