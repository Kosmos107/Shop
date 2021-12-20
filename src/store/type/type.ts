
export enum prodActionType {
    AddNewLike = "AddNewLike"
}

export enum basketActionType{
    AddNewProduct = "AddNewProduct",
    DeleteOneProduct ="DeleteOneProduct",
    AllDeleteOneProduct = "AllDeleteOneProduct"
}

export interface basketState{
    list:any[]
}


export interface prodState{
    list:any[],
    
    
}


export interface basketActions{
    type:basketActionType.AddNewProduct,
    payload:any
}
export interface basketActionsDelet{
    type:basketActionType.DeleteOneProduct,
    payload:any
}
export interface basketActionsAllDelet{
    type:basketActionType.AllDeleteOneProduct
}

export interface prodActions{
    type:prodActionType.AddNewLike,
    payload:any
}


export type objBasket={
    id:any,
    name:string,
    price:number,
}
export type ActionsBasket = basketActions |basketActionsDelet |basketActionsAllDelet
export type Actions =prodActions|prodActions

