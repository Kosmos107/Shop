import React from 'react'
import Filter from "../components/Filter"

import Product from "../components/Product"
import s from "../Contant.module.scss"
interface Info {
    text?:string,
    filter?:string,
    children?:React.ReactChild|React.ReactNode
}



const Catalog:React.FC<Info> = ({text="23",}) => {
    
    return (
        <div>
           <div>
               <div>{text}</div>
               <Filter/>
           </div>
           <div className={s.shop}>
            {mass.map((arr)=>{
                return <Product name={arr.name} price={arr.price} size={arr.size} />
            })}
           </div>
        </div>
    )
}

export default Catalog
const mass = [{
    name:"одежда",
    price:"256",
    size:"errrrrrr"
},{
    name:"одежда",
    price:"256",
    size:"errrrrrr"
},{
    name:"одежда",
    price:"256",
    size:"errrrrrr"
},
{
    name:"одежда",
    price:"256",
    size:"errrrrrr"
},
{
    name:"одежда",
    price:"256",
    size:"errrrrrr"
},
{
    name:"одежда",
    price:"256",
    size:"errrrrrr"
},
{
    name:"одежда",
    price:"256",
    size:"errrrrrr"
},
{
    name:"одежда",
    price:"256",
    size:"errrrrrr"
},
{
    name:"одежда",
    price:"256",
    size:"errrrrrr"
},
{
    name:"одежда",
    price:"256",
    size:"errrrrrr"
},
{
    name:"одежда",
    price:"256",
    size:"errrrrrr"
},
{
    name:"одежда",
    price:"256",
    size:"errrrrrr"
}]