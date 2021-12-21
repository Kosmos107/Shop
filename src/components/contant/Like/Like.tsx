import React,{useEffect,useState} from 'react'

import { BsHeart,BsHeartFill } from "react-icons/bs";
import {useDispatch} from "react-redux"
import {AddLike} from "../../../store/actionCreate/actions"



interface info {
    id:any,
    like:boolean,
}
const Like:React.FC<info> = ({like,id}) => {

    const dispatch =useDispatch()
    const [newLike,setNewLike]= useState(like)
    
    const changeLike =():void=>{
        setNewLike((newLike:boolean)=>!newLike)
        console.log(newLike)
    }

   useEffect(()=>{
    console.log("сработал юзэффект")
    dispatch(AddLike(id,newLike))
   },[newLike,id,dispatch])
    return (
        
        <span onClick={changeLike} >{newLike?<BsHeartFill/>:<BsHeart/>}</span>
    )
}

export default Like
