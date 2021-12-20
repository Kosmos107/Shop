import React from 'react'
import s from "./Contant.module.scss"
import {Routes,Route} from "react-router-dom"
import Home from "./Home/Home"
import Catalog from './Catalog/Catalog'
import CardProduct from './CardProduct/CardProduct'
import Like from "./Like/Like"
import Basket from './Backet/Basket'

const Contant = () => {
    return (
        <div  className={s.WrapperContant}>
            
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Like' element={<Like/>}/>
                <Route path='/Basket' element={<Basket/>}/>
                <Route path='/Catalog' element={<Catalog/>}/>
                <Route path='/CardProduct' element={<CardProduct/>}/>
            </Routes>
            
        </div>
    )
}

export default Contant
