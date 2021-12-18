import React from 'react'
import s from "../Contant.module.scss"
// import { BsHeart,BsHeartFill } from "react-icons/bs";
import Product from "../components/Product"
import Head from '../components/Head';
import { useDispatch,useSelector } from 'react-redux';
import { TypedSelector } from '../../../Hooks/TypedSelector';




const Like:React.FC = () => {
    const state = TypedSelector(state => state.product.list)
    const filter = state.filter(arr=>arr.like===true)
    console.log(state)
    return (
         
        <div className={s.Like}>
            <Head name={"лайкнутый товар"}/>
            <div className={s.Like__wrapper}>
            {filter.map((arr)=>{
                   return <Product key={arr.id}
                   name={arr.name}
                   id={arr.id}
                   like={arr.like}
                   price={arr.price}
                   />
                        
                   
                
            })}
  
                    
            </div>
        </div>
    )
}

export default Like
