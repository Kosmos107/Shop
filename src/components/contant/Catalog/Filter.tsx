import React,{useState} from 'react'
import s from "../Contant.module.scss"
import { BiX} from "react-icons/bi";
import cl from 'classnames';


interface Filt{
    active:boolean,
    change:()=>void
}

const Filter:React.FC<Filt> = ({active,change}) => {

    const [act,setAct] = useState(false)
    const ss = cl({[s.off]:act})

    
    const name = cl(s.Filter__wrapper,{[s.Filter__active]:active})
    return (
        <div className={name} >
            <div className={s.Filter__container}>
                <div className={s.Filter__panel}>
                    <span>Фильтры</span>
                    <BiX style={{fontSize:"30px",cursor:"pointer"}} onClick={change } />
                </div>
                <div className={s.Filter__item}>
                    <div>Цена&nbsp;<span onClick={()=>{setAct(s=>!s)}} >v</span></div> 
                    <ul className={ss}>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                </div>
                <div className={s.Filter__item}>Страна&nbsp;<span>v</span></div>
                <div className={s.Filter__item}>Страна&nbsp;<span>v</span></div>
                <div className={s.Filter__item}>Страна&nbsp;<span>v</span></div>
                <div className={s.Filter__item}>Страна&nbsp;<span>v</span></div>
                <div className={s.Filter__item}>Страна&nbsp;<span>v</span></div>
            </div>
            <div className={s.Filter__Btns}>
                <button>Применить</button>
            </div>
            
        </div>
    )
}

export default Filter
