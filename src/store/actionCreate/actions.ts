
import {prodActionType} from "../type/type" 

export const AddLike = (id:any,val:boolean)=>{
    return{
        type:prodActionType.AddNewLike,
        payload:{
            id:id,
            value:val
        }
    }
}