import React from 'react'
import s from "../Contant.module.scss"

interface Info {
    name:string,
    price:any,
    size:string
}

const Product:React.FC<Info>= ({name,price,size}) => {
    return (

            <div className={s.product}>
                <a href="$"><img src="" alt="" /></a>
                    <span></span>
                    <span></span>
                <div className={s.size}>
                    <img src={size} alt="" />
                </div>
                <div className={s.name}>
                    {name}
                </div>
                <div className={s.price}>
                    {price}
                </div>
            </div>
        
    )
}

export default Product
