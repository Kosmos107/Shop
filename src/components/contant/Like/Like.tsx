import React from 'react'
import s from "../Contant.module.scss"
// import { BsHeart,BsHeartFill } from "react-icons/bs";
import Product from "../components/Product"
import Head from '../components/Head';
import { useDispatch,useSelector } from 'react-redux';
import { LikeTypedSelector } from '../../../Hooks/LikeTypedSelector';




const Like:React.FC = () => {
    const state = LikeTypedSelector(state => state.like.list)
    const dispatch = useDispatch()
    console.log(state)
    console.log(dispatch)

    
    return (
         
        <div className={s.Like}>
            <Head name={"лайкнутый товар"}/>
            <div className={s.Like__wrapper}>
            {state.map((arr)=>{
                   return <Product like={arr.like} name={arr.name} price={arr.price} size={arr.size} />
                
            })}
  
                    
            </div>
        </div>
    )
}

export default Like
