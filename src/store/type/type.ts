
export enum prodActionType {
    AddNewLike = "AddNewLike"
}



export interface prodState{
    list:any[],
    
    
}


export interface prodActions{
    type:prodActionType.AddNewLike,
    payload:any
}




export type Actions =prodActions|prodActions

