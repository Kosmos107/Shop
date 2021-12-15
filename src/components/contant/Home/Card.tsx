import React from 'react'
import s from "../Contant.module.scss"

interface cards {
    width?:string,
    height?:string,
    img?:string,
} 
const Card:React.FC<cards> = ({width,height,img}) => {
  
    
    return (
        // <div  className={s.card}>
            <img className={s.card} style ={{width:width}} src={img} alt="Card" />
        // </div>
    )
}

export default Card
