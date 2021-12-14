import React from "react"
import Controls from "./Controls"
import s from "./Menu.module.scss"
import Search from "./Search"
import Burger from "./Burger"

const logo = "https://static-sl.insales.ru/files/1/2355/16312627/original/logo.svg"

interface propsMenu{
    addMenu:()=>void
}

const Menu:React.FC<propsMenu> = ({addMenu})=>{
    
    return (
        <div className={s.Menu__wrapper}>
            <Burger addMenu={addMenu}   />
            <a href="3" className={s.Menu__logo}><img src={logo}/></a>
            <Search/>
            <Controls/>
        
        </div>
    )
}
export default Menu