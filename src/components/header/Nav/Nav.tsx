import React from 'react'
import List from './List'

import s from "./Nav.module.scss"
const Nav = () => {
    return (
        <div className={s.wrapper}>
            <List link={"/CatalogWoman"} name={"Женщины"}/>
            <List link={"/CatalogMen"} name={"Мужчины"}/>
            
        </div>
    )
}
export default Nav