import React from 'react'
import s from "../Contant.module.scss"
import Product from "./Product"

const Slider = () => {
    return (
        <div className={s.slider}>
            <div className={s.slider__line}>
                <span className={s.slider__left}></span>
                {/* {mass.map((arr)=>{
                    return <Product like={arr.like} width={"350px"} name={arr.name} price={arr.price} size={arr.size} />
                })}  нехватает ид*/} 
                <span className={s.slider__rigth}></span>
            </div>
        </div>
    )
}

export default Slider
