import React from 'react'
import s from "./Contant.module.scss"
import {Routes,Route} from "react-router-dom"
import Home from "./Home/Home"
import Catalog from './Catalog/Catalog'
import Like from './Like/Like'

const Contant = () => {
    return (
        <div  className={s.WrapperContant}>
            
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Catalog' element={<Catalog/>}/>
                <Route path='/Like' element={<Like/>}/>
            </Routes>
            
        </div>
    )
}

export default Contant
