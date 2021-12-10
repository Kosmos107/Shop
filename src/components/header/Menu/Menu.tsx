import React,{useState} from "react"
import Controls from "./Controls"
import s from "./Menu.module.scss"
import Search from "./Search"
import Burger from "./Burger"
const logo = "https://static-sl.insales.ru/files/1/2355/16312627/original/logo.svg"

//сделать функцию для измерения размера экрана

const Menu = ()=>{
    const size:number = window.innerWidth
    const [userSize,setUserSize] = useState(size)
    const changeActive = ():void=>{
        setActive((prev:boolean):boolean=>!prev)
        console.log(active)
    } 
    const [active,setActive]=useState(false)
     ///сделать адаптив через useEffect
    return (
        <div className={s.Menu__wrapper}>
            <Burger  active={active} change={changeActive} />
            <a href="3" className={s.Menu__logo}><img src={logo}/></a>
            <Search/>
            <Controls/>
        
        </div>
    )
}
export default Menu