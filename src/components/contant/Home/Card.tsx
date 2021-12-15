import React from 'react'
import s from "../Contant.module.scss"
import {Link} from "react-router-dom"

interface cards {
    width?:string,
    height?:string,
    img?:string,
} 
const Card:React.FC<cards> = ({width,height,img}) => {
  
    
    return (
        // <div  className={s.card} >
        <Link style ={{width:width}} className={s.card} to="5">       
          <img  src={img} alt="Card" />
        </Link> 
        // </div>
    )
}

export default Card
