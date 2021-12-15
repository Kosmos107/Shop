import React from "react"
import Controls from "./Controls"
import s from "./Menu.module.scss"
import Search from "./Search"
import Burger from "./Burger"
import {Link} from "react-router-dom"

const logo = "https://static-sl.insales.ru/files/1/2355/16312627/original/logo.svg"

interface propsMenu{
    addMenu:()=>void
}

const Menu:React.FC<propsMenu> = ({addMenu})=>{
    
    return (
        <div className={s.Menu__wrapper}>
            <Burger addMenu={addMenu}   />
            <Link to="/"  className={s.Menu__logo}><img src={logo} alt="logo"/></Link>
            <Search/>
            <Controls/>
        
        </div>
    )
}
export default Menu