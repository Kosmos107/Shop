import React from 'react'
import Link from './Link'

import s from "./Nav.module.scss"
const Nav = () => {
    return (
        <div className={s.wrapper}>
            <Link name={"Женщины"}/>
            <Link name={"Мужчины"}/>
            
        </div>
    )
}
export default Nav