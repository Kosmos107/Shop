
import s from "../Contant.module.scss"
import { useDispatch } from 'react-redux'; 
import {TypedSelector} from  "../../../Hooks/TypedSelector"
import {AddProductInBasket } from "../../../store/actionCreate/actions"
import Like from "../Like/Like"


interface Info {
    img?:any,
    names?:string,
    price?:string,
    

}
const CardProduct:React.FC<Info> = () => {

    const ActiveProduct = TypedSelector(state=>state.active.id)
    const infoState =TypedSelector(state=>state.product.list)
    const Index = infoState.findIndex((el)=>el.id===ActiveProduct)
    const {img,id,price,name,like}= infoState[Index]
    const dispatch = useDispatch()

    
    return (
        <div className={s.CardProduct}>
            <div className={s.CardProduct__content}>
                <div className={s.CardProduct__photo}>
                    <img src={img} alt="" />
                </div>
                <div className={s.CardProduct__description}>
                    <p>{name}</p>
                    <p>{price}₽</p>
                    <div className={s.CardProduct__btns}>
                        <button  onClick={()=>dispatch(AddProductInBasket({id,price,img,name}))}>В корзину</button>
                        <Like id={id} like={like}/>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default CardProduct
