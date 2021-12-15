import React from 'react'
import s from "./Contant.module.scss"
import {Routes,Route} from "react-router-dom"
import Home from "./Home/Home"

const Contant = () => {
    return (
        <div  className={s.WrapperContant}>
            
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
            
        </div>
    )
}

export default Contant
