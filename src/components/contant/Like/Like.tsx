import React from 'react'
import s from "../Contant.module.scss"
import { BsHeart,BsHeartFill } from "react-icons/bs";
import i from "../../../img/170501.webp" 



interface Info {
    img?:any,
    text?:string,
    price?:string,

}
const Like:React.FC<Info> = ({img=i,text="нет текста",price="0"}) => {
    return (
        <div className={s.Like}>
            <div className={s.Like__content}>
                <div className={s.Like__photo}>
                    <img src={img} alt="" />
                </div>
                <div className={s.Like__description}>
                    <p>{text}</p>
                    <p>{price}₽</p>
                    <div className={s.Like__btns}>
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

export default Like
