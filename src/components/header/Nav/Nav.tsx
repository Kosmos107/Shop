import React from 'react'
import List from './List'

import s from "./Nav.module.scss"
const Nav = () => {
    return (
        <div className={s.wrapper}>
            <List name={"Женщины"}/>
            <List name={"Мужчины"}/>
            
        </div>
    )
}
export default Nav