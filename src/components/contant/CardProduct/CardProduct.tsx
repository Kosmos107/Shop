import React from 'react'
import s from "../Contant.module.scss"
import { BsHeart,BsHeartFill } from "react-icons/bs";
import i from "../../../img/170501.webp" 



interface Info {
    img?:any,
    text?:string,
    price?:string,
    

}
const CardProduct:React.FC<Info> = ({img=i,text="нет текста",price="0"}) => {
    return (
        <div className={s.CardProduct}>
            <div className={s.CardProduct__content}>
                <div className={s.CardProduct__photo}>
                    <img src={img} alt="" />
                </div>
                <div className={s.CardProduct__description}>
                    <p>{text}</p>
                    <p>{price}₽</p>
                    <div className={s.CardProduct__btns}>
                        <button>В корзину</button>
                        <span><BsHeart/></span>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default CardProduct
