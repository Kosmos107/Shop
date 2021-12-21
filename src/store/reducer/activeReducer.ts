import {stateActionType,ActionsActive} from "../type/type"

const initState:any ={
        id:1
   }


export const activeReducer = (state=initState,action:any):ActionsActive=>{
    switch(action.type){
        case stateActionType.activeProduct:
        return{
            ...action.payload
        }

        default:return state
    }

} 