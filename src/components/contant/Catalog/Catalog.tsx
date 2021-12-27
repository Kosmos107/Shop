import React,{useState}from 'react'
import Filter from "./Filter"
import Product from "../components/Product"
import s from "../Contant.module.scss"
import {TypedSelector} from '../../../Hooks/TypedSelector'
import {sorting} from "../../../function/function"
import { FiFilter } from "react-icons/fi";

type Search = string | undefined


interface Info {
    text?:string,
    sex?:Search,
    filter?:Search,
    val?:Search,
    children?:React.ReactChild|React.ReactNode
}



const Catalog:React.FC<Info> = ({text="Название Категорий",val=" ",filter="default"}) => {
    const [activeFilter,setActiveFilter] = useState(false)
    
    const changeAcive = ()=>{
        setActiveFilter(active=>!active)
    }
  

    const ObjFilter:any = {
        sex:(state:any[])=>state.filter((arr)=>arr.sex===val),
        search:(state:any[])=>state.filter(arr=>arr.name.toLowerCase().includes(val.toLowerCase())),
        default:(state:any[])=>state
    }
    
    
    const state= TypedSelector(state=>state.product.list)
    
    const [SortList,setSortList] = useState(state)

    const newState = ObjFilter[filter](SortList)
   

    return (
        <div className={s.control__wrapper}>
            <Filter active={activeFilter} change={changeAcive}/>
           <div  className={s.control__panel}>
               <div  className={s.control__text}>{text}</div>
               <div className={s.control__sortPanel}>
                    <button onClick={changeAcive} className={s.control__btn}>Фильтр<FiFilter style={{marginLeft:"8px"}} /></button>
                    <select onClick={(e:any)=>{sorting(state,"price",e.target.value,setSortList)}}  className={s.sorting}>
                        <option value="0">без сортировки</option>
                        <option value="sortIncrease">цена по возрастанию</option>
                        <option value="sortDecrement"> цена по убыванию</option>
                    </select>
                    
               </div>
           </div>
           <div className={s.shop} >
       
            {
            newState.length ?newState.map((arr:any)=>{
                return <Product key={arr.id}
                id={arr.id}
                like={arr.like}
                 name={arr.name}
                  price={arr.price}
                   size={arr.size} 
                   img={arr.img}/>
            }) : <div style={{margin:"0 auto",fontSize:"25px"}} > ничего не найдено, эх жалко</div> }
           </div>
        </div>
    )
}

export default Catalog
