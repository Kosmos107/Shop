import React from 'react'
import s from "../Contant.module.scss"

interface Name {
    name:string
}
const Head:React.FC<Name> = ({name}) => {
    return (
        <div className={s.head}>
            <strong>
                {name}
            </strong>
        </div>
    )
}

export default Head
