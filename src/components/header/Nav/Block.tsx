import React from 'react'
import {Link} from "react-router-dom"

const arr:string[] =["Популярные","Одежда","Обувь","Аксессуары"]

const Block = () => {
    return (
        <ul >
           {arr.map((arr)=>{
               return (
                   <li><Link to="123">{arr}</Link></li>
               )
           })} 
        </ul>
    )
}

export default Block
