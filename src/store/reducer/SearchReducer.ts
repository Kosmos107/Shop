import {searchActionType,SearchActive} from "../type/type"

const initState:any ={
     name:""
   }


export const searchReducer = (state=initState,action:any):SearchActive=>{
    switch(action.type){
        case searchActionType.searchProduct:
        return{
            ...action.payload
        }

        default:return state
    }

} 