import React,{useState} from 'react'
import { AiFillCaretDown,AiFillCaretUp } from "react-icons/ai";
import s from "../Contant.module.scss"


interface children {
    children?:React.ReactChild|React.ReactNode
    name:string
}

const FilterInner:React.FC<children> = ({children,name}) => {

    const [active,setActive] = useState(false)
    const change = ()=>{
        setActive(state=>!state)
        console.log(active)
    }
    return (
        <div  className={s.Filter__item}>
            <div onClick={change}>
                <span>{name}</span>&nbsp;
                {active?<AiFillCaretUp style={{marginTop:"5px"}} />:<AiFillCaretDown style={{marginTop:"5px"}} />}
            </div>
            {active? children : null}
        </div>
    )
}

export default FilterInner
