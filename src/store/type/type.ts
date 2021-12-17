
export enum likeActionType {
    AddNewProduct = "AddNewProduct"
}
export enum prodActionType{
    GetProduct = "GetProduct"
}


export interface prodState{
    list:any[],
    like:any[]
}
 export interface likeState {
    list:any[],
}

export interface prodActions{
    type:prodActionType.GetProduct,
    payload:any
}

export interface likeActions {
    type:likeActionType.AddNewProduct
    payload:any
}


export type prodAction =prodActions|prodActions
export type Actions= likeActions
