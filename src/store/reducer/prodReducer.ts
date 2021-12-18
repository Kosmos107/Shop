
import {prodActionType,prodState,Actions} from "../type/type"

const initState:prodState ={
    list:[{
        id:1,
        name:"одежда",
        price:"256",
        size:"errrrrrr",
        like:true
    },{
        id:2,
        name:"одежда",
        price:"256",
        size:"errrrrrr",
        like:false
    },{
        id:3,
        name:"одежда",
        price:"256",
        size:"errrrrrr",
        like:false
    },]
}

export const prodReducer = (state=initState,action:Actions):prodState=>{
    switch(action.type){
        case prodActionType.AddNewLike:
            const likeID = action.payload.id
            const value =action.payload.value
            const Index = state.list.findIndex((arr)=>arr.id===likeID)
            const item = state.list[Index]
            const newObj ={
                ...item,
                like:value
            } 

            return{
                    ...state,
                    list:[
                        ...state.list.slice(0,Index),
                        newObj,
                        ...state.list.slice(Index+1),
                    ]
                }
            


        default:return state
    }

} 