import React from 'react'
import s from "./Menu.module.scss"
import  persona from "../Menu/img/persona.svg"
import  heart from "../Menu/img/heart.svg"
import  shop from "../Menu/img/shop.svg"






const Controls = () => {
    return (
        <ul className={s.Controls__wrapper}>
            <li><a href="#"><img className={s.Controls__img} src={persona} alt="" /></a></li>
            <li><a href="#"><img className={s.Controls__img} src={heart} alt="" />
                <div className={s.Controls__notice}>0</div>
            </a></li>
            <li><a href="#"><img className={s.Controls__img} src={shop} alt="" />
                <div className={s.Controls__notice}>0</div>
            </a>
                <span className={s.Controls__money}>0,00&nbsp;$</span>
            </li>
        </ul>
    )
}


export default Controls
