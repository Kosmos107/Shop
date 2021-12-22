import React from 'react'
import Filter from "../components/Filter"
import Product from "../components/Product"
import s from "../Contant.module.scss"
import {TypedSelector} from '../../../Hooks/TypedSelector'


type Search = string | undefined


interface Info {
    text?:string,
    sex?:Search,
    filter?:Search,
    val?:Search,
    children?:React.ReactChild|React.ReactNode
}



const Catalog:React.FC<Info> = ({text="Название Категорий",val=" ",filter="default"}) => {

    const ObjFilter:any = {
        sex:()=>state.filter((arr)=>arr.sex===val),
        search:()=>state.filter(arr=>arr.name.toLowerCase().includes(val.toLowerCase())),
        default:()=>state
    }
    
    
    const state= TypedSelector(state=>state.product.list)
    const newState = ObjFilter[filter]()
    return (
        <div>
           <div className={s.control__panel}>
               <div className={s.control__text}>{text}</div>
               <div className={s.control__filter}>
                   <Filter/>
                    <select className={s.sorting}>
                        <option value="">Cортировка</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                    </select>
                
                    
               </div>
           </div>
           <div className={s.shop}>
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
