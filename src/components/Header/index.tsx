import style from "./Header.module.css"
function Header() {
    return (
        <>
        <div className={style.header}>
            <h3 className={style.title}>ChatHT</h3>
        </div>
       
        </>
    );
}

export default Header;