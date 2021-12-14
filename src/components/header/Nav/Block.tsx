import React from 'react'
import s from "./Nav.module.scss"

const arr:string[] =["Популярные","Одежда","Обувь","Аксессуары"]

const Block = () => {
    return (
        <ul >
           {arr.map((arr)=>{
               return (
                   <li><a href="">{arr}</a></li>
               )
           })} 
        </ul>
    )
}

export default Block
