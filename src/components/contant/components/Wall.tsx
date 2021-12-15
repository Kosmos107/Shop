import React from 'react'
import s from "../Contant.module.scss"

interface Info {
    children:React.ReactChild|React.ReactNode
}

const Wall:React.FC<Info> = ({children}) => {
    return (
        <div className={s.wall}>
            {children}
        </div>
    )
}

export default Wall
