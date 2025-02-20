import FormChart from "./FormChart";
import style from "../../styles/ChatPage.module.css"

function ChatPage() {
    return (
       <div className={style.containerMain}>
            <div className={style.header}>
                <h3 className={style.title}>ChatHT</h3>
            </div>
            <div  className={style.containerFormChat}>
                <FormChart/>
            </div>
       </div>
    );
}

export default ChatPage;