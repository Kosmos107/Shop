import React from 'react'
import Filter from "../components/Filter"

import Product from "../components/Product"
import s from "../Contant.module.scss"
import {TypedSelector} from '../../../Hooks/TypedSelector'





interface Info {
    text?:string,
    filter?:string,
    children?:React.ReactChild|React.ReactNode
}



const Catalog:React.FC<Info> = ({text="23",}) => {

    const state= TypedSelector(state=>state.product.list)
    
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
            {state.map((arr)=>{
                return <Product 
                id={arr.id}
                like={arr.like}
                 name={arr.name}
                  price={arr.price}
                   size={arr.size} />
            })}
           </div>
        </div>
    )
}

export default Catalog
