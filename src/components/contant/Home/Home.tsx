
import React from 'react'
import s from "../Contant.module.scss"
import Card from './Card'
import Slider from "../components/Slider"
import Head from '../components/Head'
import Woman from "../../../img/woman.webp"
import Man from "../../../img/man.webp"
import old from "../../../img/old.webp"
import embroidery from "../../../img/embroidery.webp"
import sports from "../../../img/sports.webp"
import Sred from "../../../img/Sred.webp"
import Wall from "../components/Wall"


const Home = () => {
    
    return (
        <div className={s.WHome}>
            <Wall>
                <Card text="/CatalogWoman" img={Woman}/>
                <Card text="/CatalogMen" img={Man}/>
            </Wall>
            <Wall>
                <Card img={old}/>
                <Card img={embroidery}/>
                <Card img={sports}/>
                <Card img={Sred}/>
            </Wall>
            <Head name="Мужское" />  
           <Slider name="sex" search="men" />
           <Head name="Женское" />  
           <Slider name="sex" search="woman"/>
            <Head name="Наши партнеры" />  
            <div className={s.brand}>
                <img src="https://static-sl.insales.ru/r/NvWRh_bV59o/rs:fit:500:0:1/plain/files/1/4362/14930186/original/Component-8.png@webp" alt="" />
                <img src="https://static-sl.insales.ru/r/8a9ChehUteI/rs:fit:500:0:1/plain/files/1/4363/14930187/original/Component-2.png@webp" alt="" />
                <img src="https://static-sl.insales.ru/r/_0BHp3bgnXk/rs:fit:500:0:1/plain/files/1/4365/14930189/original/Component-3.png@webp" alt="" />
                <img src="https://static-sl.insales.ru/r/mbpgQxkH4vs/rs:fit:500:0:1/plain/files/1/4361/14930185/original/Component.png@webp" alt="" />
                <img src="https://static-sl.insales.ru/r/VfxxLRLGf2Q/rs:fit:500:0:1/plain/files/1/4366/14930190/original/Component-4.png@webp" alt="" />
            </div>
            <div className={s.shop}></div>
        </div>
       
    )
}

export default Home
