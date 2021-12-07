import React from 'react'
import s from "./Menu.module.scss"

    const Search = () => {
        return (
            <div className={s.Search__wrapper}>
                <input className={s.Search__text} type="text" />
                <button className={s.Search__icon}>лупа</button>
            </div>
        )
    }

export default Search
