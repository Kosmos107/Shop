import React from 'react'
import s from "./Menu.module.scss"
import cn from "classnames"

// const n = `${s.Burger__wrapper} ${s.Burger__active}`


interface Burg{
    change:()=>void,
    active:boolean,
    
}

const Burger:React.FC<Burg>= (props)=> {
    console.log(props)
    const classBurger = cn(s.Burger__line,{[s.Burger__active]:props.active})
    
    
    
    return (
        <div onClick={props.change} className={s.Burger__wrapper}>
            <span className={classBurger}></span>
        </div>
    )
}

export default Burger
