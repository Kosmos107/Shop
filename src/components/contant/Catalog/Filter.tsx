import React from 'react'
import s from "../Contant.module.scss"
import { BiX} from "react-icons/bi";
import cl from 'classnames';
import FilterInner from "./FilterInner"


interface Filt{
    active:boolean,
    change:()=>void,
    localFilter?:(e:any)=>any
}

const Filter:React.FC<Filt> = ({active,change,localFilter}) => {

    // const [act,setAct] = useState(false)
    // const ss = cl({[s.off]:act})

    
    const name = cl(s.Filter__wrapper,{[s.Filter__active]:active})
    return (
        <div className={name} onClick={localFilter} >
            <div className={s.Filter__container}>
                <div className={s.Filter__panel}>
                    <span>Фильтры</span>
                    <BiX style={{fontSize:"30px",cursor:"pointer"}} onClick={change } />
                </div>
                    <FilterInner name="Цена" >
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </FilterInner>
                    <FilterInner name="Цена" >
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </FilterInner>
                    <FilterInner name="Цена" >
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </FilterInner>
            </div>
            <div className={s.Filter__Btns}>
                <button >Применить</button>
            </div>
            
        </div>
    )
}

export default Filter
