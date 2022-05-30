import React from 'react'
import s from "../Contant.module.scss"
import {Link} from "react-router-dom"

interface cards {
    width?:string,
    height?:string,
    img?:string,
    text?:string,
} 
const Card:React.FC<cards> = ({img,text="/Catalog"}) => {
    
    
    return (
        // <div  className={s.card} >
        <Link  className={s.card} to={text}>       
          <img  src={img} alt="Card" />
        </Link> 
        // </div>
    )
}

export default Card
