import React,{useState} from 'react'
import s from "../Contant.module.scss"
import img from "../../../img/170501.webp"
import { BsHeart,BsHeartFill } from "react-icons/bs";


interface Info {
    name:string,
    price:any,
    size:string
    width?:string
}

const Product:React.FC<Info>= ({name,price,size,width="22%"}) => {

    const [like,setLike]= useState(false)

   
    return (
        
            <div style={{width:width}} className={s.product}>
                <a className={s.product__inner} href="$"><img src={img} alt="" /></a>
                    <span className={s.product__like} onClick={()=>setLike(like=>!like)} >{like?<BsHeartFill/>:<BsHeart/>}</span>
                <p className={s.name}>
                    <a href="23">{name} </a>
                </p>
                <p className={s.price}>
                    {price}&nbsp;₽
                </p>
            </div>
        
    )
}

export default Product
