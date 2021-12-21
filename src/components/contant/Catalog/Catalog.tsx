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



const Catalog:React.FC<Info> = ({text="23"}) => {
    const filtr= (name:string)=>{
        if(name === "woman"|| name ==="men"){
           return state.filter((arr)=>arr.sex===name)
        }else{
            return state
        }  
    
    }

    const state= TypedSelector(state=>state.product.list)
    const newState = filtr(text)
    debugger
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
            {newState.map((arr)=>{
                return <Product key={arr.id}
                id={arr.id}
                like={arr.like}
                 name={arr.name}
                  price={arr.price}
                   size={arr.size} 
                   img={arr.img}/>
            })}
           </div>
        </div>
    )
}

export default Catalog
