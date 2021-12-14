import React,{useState} from "react"
import Menu from "./Menu/Menu"
import Nav from "./Nav/Nav"
import s from "./Header.module.scss"
import Adaptiva from "./Nav/Adaptiva"
import classes from "classnames"

const Header = ()=>{
    const[adapt,setAdapt]= useState<boolean>(false)

        const addMenu =():void=>{
            console.log("сработала")
            setAdapt(p=>!p)
        }
    return(
        <div className={s.wrapper}>
            <Adaptiva adapt={adapt} addMenu={addMenu}/>
            <Menu addMenu={addMenu} />
            <Nav/>
        </div>
    )
}
export default Header