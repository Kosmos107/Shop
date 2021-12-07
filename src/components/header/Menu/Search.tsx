import React from 'react'
import s from "./Menu.module.scss"
import magni from "./img/magni.svg"
    const Search = () => {
        return (
            <div className={s.Search__wrapper}>
                <input placeholder="Поиск" className={s.Search__text} type="text" />
                <button  className={s.Search__icon}>
                    <img src={magni} alt="" />
                </button>
            </div>
        )
    }

export default Search
