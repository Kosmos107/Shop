import React from 'react'
import s from "../Contant.module.scss"
// import { BsHeart,BsHeartFill } from "react-icons/bs";
import Product from "../components/Product"
import Head from '../components/Head';
import { TypedSelector } from '../../../Hooks/TypedSelector';

import { GiCat } from "react-icons/gi";




const LikeList:React.FC = () => {
    const state = TypedSelector(state => state.product.list)
    const filter = state.filter(arr=>arr.like===true)
    console.log(state)
    console.log(filter)
    return (
         
        <div className={s.Like}>
            <Head name={"лайкнутый товар"}/>
            <div className={s.Like__wrapper}>
            {(filter.length!==0)?filter.map((arr)=>{
                   return <Product key={arr.id}
                   name={arr.name}
                   id={arr.id}
                   like={arr.like}
                   price={arr.price}
                   img={arr.img}
                   />
            }):<div className={s.Like__empty}>ничего не нравится<GiCat  style={{marginLeft:"20px"}}/></div>}
  
                    
            </div>
        </div>
    )
}

export default LikeList
