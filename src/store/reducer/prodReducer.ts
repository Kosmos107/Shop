import {prodActionType,prodState,prodActions} from "../type/type"

const initState:prodState ={
    list:[{
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
    },],
    like:[]
}

export const prodReducer = (state=initState,action:prodActions):prodState=>{
    switch(action.type){
        case prodActionType.GetProduct:
            return{
                ...state,
                list:[...state.list,action.payload ]
            }


        default:return state
    }

} 