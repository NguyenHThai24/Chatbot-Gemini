import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ChatPage from "../pages/Chat";

import style from "./DefaultLayout.module.css"
function DefaultLayout() {
    return (
        <div className={style.container}>
            <div className={style.sidebar}>
                <Sidebar/>
            </div>
            <div className={style.body}>
                <Header/>
                <ChatPage/>
            </div>
        </div>
    );
}

export default DefaultLayout;