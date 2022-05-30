import { userType,stateRegisterType } from "../type/type"
const User:userType={
    user:null,
    email:null,
    token:null
}
export const registerReducer = (state:userType=User,action:any)=>{
    switch(action.type){
        case stateRegisterType.Register:
            return{
                ...action.payload
            }
        case stateRegisterType.Exit:
            return{
                ...action.payload,
                user:null,
                email:null,
                token:null
            }
            default:return state
    }
    
}