import React,{useState} from 'react'
import Block from './Block'
import {BsChevronDown,BsChevronUp} from "react-icons/bs";
import {FiX} from "react-icons/fi"
import s from "./Nav.module.scss"
import classes from "classnames"
import { FiSearch } from "react-icons/fi"
import { AiOutlineHeart,AiOutlineUser } from "react-icons/ai";
import { TypedSelector } from '../../../Hooks/TypedSelector';
import {Link} from "react-router-dom"



    
interface propsMenu{
    addMenu:()=>void,
    adapt:boolean
}

const MenuBurger:React.FC<propsMenu> = ({addMenu,adapt}) => {
    const state= TypedSelector(state=>state.product.list)
    const filterLike = state.filter(arr=>arr.like===true)
    let number =filterLike.length
    const [woman,setWoman] = useState<boolean>(false)
    const [man,setMan] = useState<boolean>(false)
    const adaptivClass = classes(s.Adaptiva,{[s.activeAdapt]:adapt})
    const f =(a:any,b:boolean):void=>{
        a((p:boolean)=>!p)
        console.log(b)
    }
    const deleg = (e:any)=>{
        if(e.target.closest('a')){
            addMenu()   
        }
    }
    return (
        <div onClick={deleg} className={adaptivClass}>
            <div className={s.wrapperOff}>
                <div className={s.innerOff} onClick={addMenu}>
                    <FiX style={{fontSize:"27px",color:"white"}}/>
                </div>
            </div>
            <div className={s.wrapperControls}>
                <div  className={s.Controls}>
                    <Link  to="/home"><AiOutlineUser/></Link>
                    <Link  to="/Like" className={s.heart}><AiOutlineHeart/>
                    <span>{number}</span>
                    </Link>
                </div>
                <FiSearch style={{cursor:"pointer"}} className={s.search}/>
            </div>
            <div className={s.wrapperLinks}>
                <div className={s.HeaderWrapperLinks}>
                    Каталог
                </div>
                <div className={s.AInner}>
                        <div  className={s.listContent}>
                        <Link to="/CatalogWoman">Женщины</Link>
                            {woman?<BsChevronUp onClick={():void=>f(setWoman,woman)} style={{cursor:"pointer",fontSize:"20px"}}/> 
                             :<BsChevronDown onClick={():void=>f(setWoman,woman)} style={{cursor:"pointer",fontSize:"20px"}} />} 
                        </div>
                        {woman?<Block/>:null}
                           
                </div>
                <div className={s.AInner}>
                        <div  className={s.listContent}>
                        <Link to="/CatalogMan">Мужчины</Link>
                             {man?<BsChevronUp onClick={():void=>f(setMan,man)} style={{cursor:"pointer",fontSize:"20px"}}/> 
                             :<BsChevronDown onClick={():void=>f(setMan,man)} style={{cursor:"pointer",fontSize:"20px"}} />}
                             
                        </div>
                        {man?<Block/>:null}
                </div>
            </div>
        </div>
    )
}

export default MenuBurger
