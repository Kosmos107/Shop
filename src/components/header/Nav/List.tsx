import React from 'react'
import s from "./Nav.module.scss"
import WBlock from "./WBlock"
import {Link} from "react-router-dom"
interface User {
    name:string
}

const List = (props:User) => {
    return (
        <div className={s.link}>
            <Link to="/Catalog">{props.name}<span className={s.arrow}>{">"}</span></Link>
            
            <WBlock/>
        </div>
    )
}

export default List
