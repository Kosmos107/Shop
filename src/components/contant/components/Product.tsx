import React,{useState} from 'react'
import s from "../Contant.module.scss"
import img from "../../../img/170501.webp"
import { BsHeart,BsHeartFill } from "react-icons/bs";


interface Info {
    name:string,
    price:any,
    size:string,
    width?:string,
    like:boolean
}

const Product:React.FC<Info>= ({like,name,price,size,width="22%"}) => {

    const proverka =(e:any):void=>{
        console.log(e)
        console.log(e.target)
    }
    const [newlike,setNewlike]= useState(like)

   
    return (
        
            <div onClick={proverka} style={{width:width}} className={s.product}>
                <a className={s.product__inner} href="$"><img src={img} alt="" /></a>
                    <span className={s.product__like} onClick={()=>setNewlike(newlike=>!newlike)} >{newlike?<BsHeartFill/>:<BsHeart/>}</span>
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
