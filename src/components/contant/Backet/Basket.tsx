import React from 'react'
import s from "../Contant.module.scss"
import BasketInner from './BasketInner'

import { TypedSelector } from '../../../Hooks/TypedSelector'

import Head from '../components/Head'


const Basket = () => {
    const state = TypedSelector(state=>state.basket.list)
    return (
        <div>
            <Head name={"Корзина"}></Head>
            <div className={s.Basket__wrapper}>
               {(state.length>0)?state.map(arr=>
               {return (<BasketInner 
                id={arr.id}
                img={arr.img}
                price={arr.price}
                name={arr.name}
                count={arr.count}
               />)}):<div className={s.Basket__empty}>корзина пустая</div>}
            </div>
        </div>
    )
}

export default Basket
