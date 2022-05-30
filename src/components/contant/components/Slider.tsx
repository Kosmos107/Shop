import React,{useState,useRef} from 'react'
import s from "../Contant.module.scss"
import Product from "./Product"
import cn from "classnames"
import { AiOutlineArrowLeft,AiOutlineArrowRight} from "react-icons/ai";
import { TypedSelector } from '../../../Hooks/TypedSelector'
import {filterState} from "../../../function/function"


type Arg = string|undefined|null
interface slider {
    children?:React.ReactChild|React.ReactNode
    name?:Arg 
    search?:Arg 
}

const Slider:React.FC<slider> = ({children,name,search}) => {
    const state = TypedSelector(state=>state.product.list)
    const newState =filterState(state,name,search)
    const sliderRef = useRef<HTMLDivElement>(null)
    const [leftArrow] = useState(false)
    const [rigthArrow] = useState(false)

    const prevHandler = ()=>{
        if(sliderRef.current){
            console.log(sliderRef)
            console.log(sliderRef.current.scrollLeft)
            sliderRef.current.scrollTo({
                left:sliderRef.current.scrollLeft - 340,
                behavior:"smooth"
            })
        }   
    }
    const nextHandler = () =>{
        if(sliderRef.current){
            sliderRef.current.scrollTo({
                left:sliderRef.current.scrollLeft+340,
                behavior:"smooth"
            })
        }
    }

    const arrowLeftCl = cn(s.slider__arrow,s.slider__prev,{[s.slider__active]:leftArrow})
    const arrowRigthCl = cn(s.slider__arrow,s.slider__next,{[s.slider__active]:rigthArrow})
   
    return (
    
        
        <div className={s.slider}>
            <button onClick={prevHandler} className={arrowLeftCl}><AiOutlineArrowLeft/></button>
            <button onClick={nextHandler} className={arrowRigthCl}><AiOutlineArrowRight/></button>
            <div className={s.slider__line} ref={sliderRef}>
                {newState.slice(0,6).map((el)=>{
                    return( <Product id={el.id} price={el.price} name={el.name}  width={"300px"} img={el.img} />)
                })}
            </div>
        </div>
    )
}

export default Slider
