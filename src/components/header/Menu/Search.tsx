import React from 'react'
import {Link} from "react-router-dom"
import s from "./Menu.module.scss"
import magni from "./img/magni.svg"
import { AddSearch } from '../../../store/actionCreate/actions'
import { useDispatch } from 'react-redux'
import { TypedSelector } from '../../../Hooks/TypedSelector'
    const Search = () => {
        const value = TypedSelector(state=>state.search.name)
        const dispatch = useDispatch()
        const SearchElement = (e:any)=>{
            let val =e.target.value
            dispatch(AddSearch(val))
        }
        return (
            <div className={s.Search__wrapper}>
                <input placeholder="Поиск" value={value} onChange={SearchElement} className={s.Search__text} type="text" />
                <Link to="/CatalogSearch">
                    <button  className={s.Search__icon}>
                        <img src={magni} alt="" />
                    </button>
                </Link>
            </div>
        )
    }

export default Search
