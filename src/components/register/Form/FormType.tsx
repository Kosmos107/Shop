export interface formix {
    name?:string,
    handler?:()=>void,
    btn?:string,
    signUp?:string,
    cln?:string
}
export enum ClassForForm {
    register="register",
    signUp="signUp"
}
export interface signType {
    value?:string,
    link?:string,
    btn?:string
}

export const ValueSign:string ="Браток,может войдешь? " 
export const ValueRegist:string ="Ну что браток,пора регаться" 