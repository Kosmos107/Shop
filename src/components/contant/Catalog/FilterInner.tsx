import React,{useState} from 'react'
import { AiFillCaretDown,AiFillCaretUp } from "react-icons/ai";
import s from "../Contant.module.scss"
import cn from "classnames"

interface children {
    children?:React.ReactChild|React.ReactNode
    name:string
}

const FilterInner:React.FC<children> = ({children,name}) => {

    const [vis,setVis] = useState(true)
    const change = ()=>{
        setVis(state=>!state)
        console.log(vis)
    }
    return (
        <div  className={s.Filter__item}>
            <div onClick={change}>
                <span>{name}</span>&nbsp;
                {vis?< AiFillCaretDown style={{marginTop:"5px"}} />:<AiFillCaretUp style={{marginTop:"5px"}} />}
            </div>
            <div className={cn({[s.Filter__children]:vis})}>
                {children}
            </div>
        </div>
    )
}

export default FilterInner
