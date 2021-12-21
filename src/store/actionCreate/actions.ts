
import {prodActionType,basketActionType,stateActionType} from "../type/type" 

export const AddLike = (id:any,val:boolean)=>{
    return{
        type:prodActionType.AddNewLike,
        payload:{
            id:id,
            value:val
        }
    }
}

interface info {
    id:any,
    name?:string,
    price?:number,
    img?:string,
    oldPrice?:number,
    like?:boolean
}

export const AddProductInBasket = (state:info)=>{
    return{
        type:basketActionType.AddNewProduct,
        payload:state
    }
}
export const DeleteProductInBasket = (state:info)=>{
    
    return{
        type:basketActionType.DeleteOneProduct,
        payload:state
    }
}
export const AllDeleteProductInBasket = (state:info)=>{
    return{
        type:basketActionType.AllDeleteOneProduct,
        payload:state
    }
}
export const ActiveProduct = (state:info)=>{

    return{
        type:stateActionType.activeProduct,
        payload:state,
    }
}