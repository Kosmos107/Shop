import React,{useState,useRef} from 'react'
import s from "../Contant.module.scss"
import Product from "./Product"
import cn from "classnames"
import { AiOutlineArrowLeft,AiOutlineArrowRight} from "react-icons/ai";




const Slider = () => {

    const slider = useRef<HTMLDivElement>(null)
    const prevHandler = ()=>{
        console.log("prev")
        if (slider.current !== null) {
          
          }
       
    }
    const nextHandler = () =>{
        console.log("next")
        // slider.current.childNodes.map(el)
    }
    return (
    
        
        <div className={s.slider}>
            <button onClick={prevHandler} className={cn(s.slider__arrow,s.slider__prev)}><AiOutlineArrowLeft/></button>
            <button onClick={nextHandler} className={cn(s.slider__arrow,s.slider__next)}><AiOutlineArrowRight/></button>
            <div className={s.slider__line} ref={slider}>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                    <div>8</div>
                    <div>9</div>
                    <div>10</div>
                    <div>11</div>

            </div>
            
        </div>
    )
}

export default Slider
