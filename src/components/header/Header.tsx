import Menu from "./Menu/Menu"
import Nav from "./Nav/Nav"
import s from "./Header.module.scss"

const Header = ()=>{
    return(
        <div className={s.wrapper}>
            <Menu/>
            <Nav/>
        </div>
    )
}
export default Header