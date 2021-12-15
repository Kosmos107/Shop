
import React from 'react'
import s from "../Contant.module.scss"
import Card from './Card'
import Slider from "../Slider"
import Head from '../Head'
import Woman from "../../../imgclothes/woman.webp"
import Man from "../../../imgclothes/man.webp"

const Home = () => {
    return (
        <div className={s.WHome}>
            <div className={s.wall}>
                <Card width="49%"  img={Woman}/>
                <Card width="49%" img={Man}/>
            </div>
            <Head name="Мужское" />  
           <Slider/>
           <Head name="Женское" />  
           <Slider/>
            <Head name="Привет" />  
            <div className={s.brand}>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
            <Head name="Наши магазины" />  
            <div className={s.shop}></div>
        </div>
       
    )
}

export default Home
