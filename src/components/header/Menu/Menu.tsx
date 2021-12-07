import Controls from "./Controls"
import s from "./Menu.module.scss"
import Search from "./Search"
const logo = "https://static-sl.insales.ru/files/1/2355/16312627/original/logo.svg"
console.log(logo)

const Menu = ()=>{

    return (
        <div className={s.Menu__wrapper}>
            <img className={s.Menu__logo}  src={logo} />
            <Search/>
            <Controls/>
        </div>
    )
}
export default Menu