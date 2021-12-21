

import {basketActionType,basketState,ActionsBasket} from "../type/type"

const initState:basketState ={
    list:[]
}

interface info {
    id:any,
    name?:string
    price?:any,
    img?:string
    count?:any,
    oldPrice?:any,
}
const addNewItem=(item:info,action:any)=>{
    if(item){
        return{
            ...item,
            count:item.count+1,
            price:item.price+item.oldPrice
        }

    }else{
        return{
            id:action.id,
            name:action.name,
            price:action.price,
            oldPrice:action.price,
            img:action.img,
            count:1,
        }
    }
}
const deleteItem=(item:info)=>{
    return{
        ...item,
        count:item.count-1,
        price:item.price-item.oldPrice
    }
}
const AlldeleteItem=(item:info)=>{
     return{
         ...item,
         count:0,
         price:0,
     }
 }
const changeList = (state:any,action:any,funct:any)=>{
            const itemID = action.payload.id
            const Index = state.list.findIndex((arr:any)=>arr.id===itemID)
            const item = state.list[Index]
            let newObj =funct(item,action.payload)
            if(Index>-1){
                if(newObj.count>0){
                    return{
                        ...state,
                        list:[
                            ...state.list.slice(0,Index),
                            newObj,
                            ...state.list.slice(Index+1),
                            
                        ]
                    }
                }else{
                    return{
                    ...state,
                    list:[
                        ...state.list.slice(0,Index),
                        ...state.list.slice(Index+1),  
                    ]
                }}
            }
                return{
                    list:[...state.list,
                     newObj
                     ]
                 }
                 
            

}



export const basketReducer = (state=initState,action:ActionsBasket):basketState=>{

    switch(action.type){  
        case basketActionType.AddNewProduct:
            return changeList(state,action,addNewItem)
           
        case basketActionType.DeleteOneProduct:
            
           return changeList(state,action,deleteItem)
            
           case basketActionType.AllDeleteOneProduct:
            
            return changeList(state,action,AlldeleteItem)


        default:return state
    }

} 