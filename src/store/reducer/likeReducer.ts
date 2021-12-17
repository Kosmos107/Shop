 import {likeActionType,likeState,Actions} from "../type/type"

const initState:likeState ={
    list:[{
        name:"одежда",
        price:"256",
        size:"errrrrrr",
        like:true
    },{
        name:"одежда",
        price:"256",
        size:"errrrrrr",
        like:false
    },{
        name:"одежда",
        price:"256",
        size:"errrrrrr",
        like:false
    },]
}

export const likeReducer = (state=initState,action:Actions):likeState=>{
    switch(action.type){
        case likeActionType.AddNewProduct:
            return{
                ...state,
                list:[...state.list,action.payload ]
            }


        default:return state
    }

} 