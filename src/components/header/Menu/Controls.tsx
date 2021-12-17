import React from 'react'
import s from "./Menu.module.scss"
import  persona from "../Menu/img/persona.svg"
import  heart from "../Menu/img/heart.svg"
import  shop from "../Menu/img/shop.svg"
import {Link} from "react-router-dom"






const Controls = () => {
    return (
        <ul className={s.Controls__wrapper}>
            <li><Link to="/CardProduct" ><img className={s.Controls__img} src={persona} alt="" /></Link></li>
            <li><Link to="/Like"><img className={s.Controls__img} src={heart} alt="" />
                <div className={s.Controls__notice}>0</div>
            </Link></li>
            <li><Link to="/Catalog"><img className={s.Controls__img} src={shop} alt="" />
                <div className={s.Controls__notice}>0</div>
            </Link>
                <span className={s.Controls__money}>0,00&nbsp;$</span>
            </li>
        </ul>
    )
}


export default Controls
