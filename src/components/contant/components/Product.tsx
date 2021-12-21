import React from 'react'
import s from "../Contant.module.scss"
import { Link } from "react-router-dom";
import { BsHeart,BsHeartFill } from "react-icons/bs";
import {useDispatch} from "react-redux"
import {ActiveProduct} from "../../../store/actionCreate/actions"
import Like from "../Like/Like"

interface Info {
    id:any,
    name:string,
    price:any,
    size?:string,
    width?:string,
    like?:boolean,
    img?:string,
}
const photo ="https://static-sl.insales.ru/r/zMjhL3PqiF4/rs:fit:1000:0:1/plain/images/products/1/4851/465007347/17024061_43_R.jpg@webp"

const Product:React.FC<Info>= ({like=false,name,price,size,width="22%",id,img=photo}) => {
    const dispatch =useDispatch()
    
    return (
        
            <div  style={{width:width}} className={s.product}>
                <Link to={"/CardProduct"} onClick={()=>{dispatch(ActiveProduct({id}))}} className={s.product__inner} ><img src={img} alt="" /></Link>
                   <Like id={id} like={like} />
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
