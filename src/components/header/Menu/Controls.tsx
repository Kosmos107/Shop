import React from 'react'
import s from "./Menu.module.scss"
import  persona from "../Menu/img/persona.svg"
import  heart from "../Menu/img/heart.svg"
import  shop from "../Menu/img/shop.svg"
import {Link} from "react-router-dom"
import { TypedSelector } from '../../../Hooks/TypedSelector'





const Controls = () => {
    const state= TypedSelector(state=>state.product.list)
    const Basket= TypedSelector(state=>state.basket.list)
    const filterLike = state.filter(arr=>arr.like===true)
    const valBasket = Basket.reduce((init,arr)=>{
      return init+arr.price
    },0)
    const colProduct = Basket.reduce((init,arr)=>{
        return init+arr.count
      },0)
    
    
    let number =filterLike.length
    

    return (
        <ul className={s.Controls__wrapper}>
            <li><Link to="/Catalog" ><img className={s.Controls__img} src={persona} alt="" /></Link></li>
            <li><Link to="/Like"><img className={s.Controls__img} src={heart} alt="" />
                <div className={s.Controls__notice}>{number}</div>
            </Link></li>
            <li><Link to="/Basket"><img className={s.Controls__img} src={shop} alt="" />
                <div className={s.Controls__notice}>{colProduct}</div>
            </Link>
                <span className={s.Controls__money}>&nbsp;{valBasket}&nbsp;₽</span>
            </li>
        </ul>
    )
}


export default Controls
