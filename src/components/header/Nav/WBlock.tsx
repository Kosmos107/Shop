import React from 'react'
import Block from './Block'
import s from "./Nav.module.scss"
const WBlock = () => {
    return (
        <div className={s.wrapperBlock}>
            <Block/>
        </div>
    )
}

export default WBlock
