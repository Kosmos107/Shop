import React from 'react'
import s from "./Nav.module.scss"

const arr:string[] =["Популярные","Одежда","Обувь","Аксессуары"]

const Block = () => {
    return (
    <div className={s.wrapperBlock}>
        <ul className={s.block}>
           {arr.map((arr)=>{
               return (
                   <li><a href="">{arr}</a></li>
               )
           })} 
        </ul>
    </div>
    )
}

export default Block
