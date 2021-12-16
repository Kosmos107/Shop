import React from 'react'
import s from "../Contant.module.scss"
import { FiFilter } from "react-icons/fi";

const Filter = () => {
    return (
        <button className={s.filter}>Фильтр<FiFilter style={{marginLeft:"8px"}} /></button>
    )
}

export default Filter
