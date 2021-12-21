import React from 'react'
import s from "../Contant.module.scss"
import { BiAddToQueue} from 'react-icons/bi';
import { FiDelete} from 'react-icons/fi';
import { AiOutlineDelete} from 'react-icons/ai';
import {AddProductInBasket,DeleteProductInBasket,AllDeleteProductInBasket  } from "../../../store/actionCreate/actions"
import { useDispatch } from 'react-redux'
const photo ='https://static-sl.insales.ru/r/zMjhL3PqiF4/rs:fit:1000:0:1/plain/images/products/1/4851/465007347/17024061_43_R.jpg@webp'

interface Info {
    img?:string,
    name?:string,
    price?:number,
    id:any,
    count?:number

}

const BasketInner:React.FC<Info> = ({img=photo,price,name,count,id}) => {
     const dispatch = useDispatch()
    return (
        <div className={s.Basket__item} >
            <div className={s.Basket__photo}>
                <img src={img} alt="" />
            </div>
            <div className={s.Basket__name}>{name}</div>
            <div className={s.Basket__price}>{price}&nbsp;₽</div>
            <div>колличесвто:&nbsp;{count}</div>
            <div className={s.Basket__control}>
                <div onClick={()=>dispatch(AddProductInBasket({id}))} ><BiAddToQueue style={{color:"120a8f"}}/></div>
                <div><FiDelete onClick={()=>dispatch(DeleteProductInBasket({id}))}style={{color:"gold"}} /></div>
                <div><AiOutlineDelete onClick={()=>dispatch(AllDeleteProductInBasket({id}))} style={{color:"#E32636"}} /></div>
            </div>
        </div>
    )
}

export default BasketInner
