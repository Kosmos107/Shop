import React from 'react'
import s from "./Menu.module.scss"
import cn from "classnames"

// const n = `${s.Burger__wrapper} ${s.Burger__active}`


interface Burg{
    addMenu:()=>void,
    
}

const Burger:React.FC<Burg>= ({addMenu})=> {
    const classBurger = cn(s.Burger__line)
    
    
    
    return (
        <div onClick={addMenu}  className={s.Burger__wrapper}>
            <span className={classBurger}></span>
        </div>
    )
}

export default Burger
