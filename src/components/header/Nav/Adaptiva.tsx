import React,{useState} from 'react'
import Block from './Block'
import {BsChevronDown,BsChevronUp} from "react-icons/bs";
import {FiX} from "react-icons/fi"
import s from "./Nav.module.scss"
import classes from "classnames"

interface propsMenu{
    addMenu:()=>void,
    adapt:boolean
}

const Adaptiva:React.FC<propsMenu> = ({addMenu,adapt}) => {
    const [woman,setWoman] = useState<boolean>(false)
    const [man,setMan] = useState<boolean>(false)
    const adaptivClass = classes(s.Adaptiva,{[s.activeAdapt]:adapt})
    const f =(a:any,b:boolean):void=>{
        a((p:boolean)=>!p)
        console.log(b)
    }
    return (
        <div className={adaptivClass}>
            <div className={s.wrapperOff}>
                <div className={s.innerOff} onClick={addMenu}>
                    <FiX style={{fontSize:"27px",color:"white"}}/>
                </div>
            </div>
            <div className={s.wrapperControls}>
            </div>
            <div className={s.wrapperLinks}>
                <div className={s.HeaderWrapperLinks}>
                    Каталог
                </div>
                <div className={s.AInner}>
                        <div  className={s.listContent}>
                            <a href="">Женщины</a>
                            {woman?<BsChevronUp onClick={():void=>f(setWoman,woman)} style={{cursor:"pointer",fontSize:"20px"}}/> 
                             :<BsChevronDown onClick={():void=>f(setWoman,woman)} style={{cursor:"pointer",fontSize:"20px"}} />} 
                        </div>
                        {woman?<Block/>:null}
                           
                </div>
                <div className={s.AInner}>
                        <div  className={s.listContent}>
                             <a  href="">Мужчины</a>
                             {man?<BsChevronUp onClick={():void=>f(setMan,man)} style={{cursor:"pointer",fontSize:"20px"}}/> 
                             :<BsChevronDown onClick={():void=>f(setMan,man)} style={{cursor:"pointer",fontSize:"20px"}} />}
                             
                        </div>
                        {man?<Block/>:null}
                </div>
            </div>
        </div>
    )
}

export default Adaptiva
