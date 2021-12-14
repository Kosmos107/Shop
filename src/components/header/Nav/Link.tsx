import React from 'react'
import s from "./Nav.module.scss"
import WBlock from "./WBlock"
interface User {
    name:string
}

const Link = (props:User) => {
    return (
        <div className={s.link}>
            <a href="">{props.name}<span className={s.arrow}>{">"}</span></a>
            
            <WBlock/>
        </div>
    )
}

export default Link
