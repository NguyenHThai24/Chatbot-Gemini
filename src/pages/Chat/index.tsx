import FormChart from "./FormChart";
import style from "./ChatPage.module.css"

function ChatPage() {
    return (
       <div className={style.containerMain}>
          
            <div  className={style.containerFormChat}>
                <FormChart/>
            </div>
       </div>
    );
}

export default ChatPage;