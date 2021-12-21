
export enum prodActionType {
    AddNewLike = "AddNewLike",
}

export enum basketActionType{
    AddNewProduct = "AddNewProduct",
    DeleteOneProduct ="DeleteOneProduct",
    AllDeleteOneProduct = "AllDeleteOneProduct"
}
export enum stateActionType{
    activeProduct = "stateActionType"
}

export interface basketState{
    list:any[]
}


export interface prodState{
    list:any[],
    
    
}
export interface ActionsActive{
    id:any,
    price:any,
    name:any,
    img:any,
    like:any,
}

export interface activeProduct{
    type:stateActionType.activeProduct,
    payload:any
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



export type ActionsBasket = basketActions |basketActionsDelet |basketActionsAllDelet
export type Actions =prodActions|prodActions

