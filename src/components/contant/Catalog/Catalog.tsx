import React,{useState,useRef}from 'react'
import Filter from "./Filter"
import Product from "../components/Product"
import s from "../Contant.module.scss"
import {TypedSelector} from '../../../Hooks/TypedSelector'
import {sorting} from "../../../function/function"
import { FiFilter } from "react-icons/fi";
import {Filtration} from "../../../function/function"
import {resultMassFilter} from "../../../function/function"

type Search = string | undefined



////////////////////////////////////////////////////////////////////////////////////////////////////////////

//добавить функции в локалфилтр из сандбокса
interface Info {
    text?:string,
    sex?:Search,
    filter?:Search,
    val?:Search,
    children?:React.ReactChild|React.ReactNode
}



const Catalog:React.FC<Info> = ({text="Название Категорий",val=" ",filter="default"}) => {
    const [activeFilter,setActiveFilter] = useState(false)
    const [localFilter,setLocalFilter] = useState(null)
    const refForm = useRef(null) 
    
    const changeAcive = ()=>{
        setActiveFilter(active=>!active)
    }
    const state= TypedSelector(state=>state.product.list)
    
    const [SortList,setSortList] = useState(state)

    const stateFilter = Filtration(SortList,filter,val)
    
    const newLocalFilter=(e:any)=>{
        e.preventDefault()
        // debugger
        resultMassFilter(stateFilter,refForm.current,setLocalFilter)
        console.log("произошла фильрация")
        
    }
    const nonLocalFilter = ()=>{
        setLocalFilter(null)
    }
    
    
   
    const contant=stateFilter.length ?(localFilter ||stateFilter).map((arr:any)=>{
        return <Product key={arr.id}
        id={arr.id}
        like={arr.like}
         name={arr.name}
          price={arr.price}
           size={arr.size} 
           img={arr.img}/>
    }) : <div style={{margin:"0 auto",fontSize:"25px"}} > ничего не найдено, эх жалко</div> 
   
    return (
        <div className={s.control__wrapper}>
            <Filter refForm={refForm} localFilter={newLocalFilter} active={activeFilter} change={changeAcive}/>
           <div  className={s.control__panel}>
               
               <div  className={s.control__text}>{text}</div>
               
               <div className={s.control__sortPanel}>
                    <button onClick={changeAcive} className={s.control__btn}>Фильтр<FiFilter style={{marginLeft:"8px"}} /></button>
                    {localFilter?<div onClick={nonLocalFilter} className={s.control__visfilter}>фильтр<span>x</span></div> :null}
                    <select onClick={(e:any)=>{sorting(state,"price",e.target.value,setSortList)}}  className={s.sorting}>
                        <option value="0">без сортировки</option>
                        <option value="sortIncrease">цена по возрастанию</option>
                        <option value="sortDecrement"> цена по убыванию</option>
                    </select>
                    
               </div>
           </div>
           <div className={s.shop} >
       
            {contant }
           </div>
        </div>
    )
}

export default Catalog
