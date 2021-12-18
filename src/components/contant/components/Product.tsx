import React,{useState,useEffect} from 'react'
import s from "../Contant.module.scss"
import img from "../../../img/170501.webp"
import { BsHeart,BsHeartFill } from "react-icons/bs";
import {AddLike} from "../../../store/actionCreate/actions"
import { useDispatch, } from 'react-redux';

interface Info {
    id:any,
    name:string,
    price:any,
    size?:string,
    width?:string,
    like?:boolean,
}

const Product:React.FC<Info>= ({like=false,name,price,size,width="22%",id}) => {

    const dispatch =useDispatch()
    const [newlike,setNewlike]= useState(like)

   useEffect(()=>{
    console.log("сработал юзэффект")
    dispatch(AddLike(id,newlike))
   },[newlike])
    return (
        
            <div  style={{width:width}} className={s.product}>
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
