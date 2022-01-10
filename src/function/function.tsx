
    export const sorting = (arr:any[],val:string,name:string,setHooks?:any):void=>{
        const objSorting:any= {
            sortIncrease:(val:any)=>(a:any,b:any):any=>{
                return a[val] - b[val]
            },
            sortDecrement:(val:any)=>(a:any,b:any):any=>{
                return b[val] - a[val]
            },
        }
        let examin = arr.find((list:any)=>list[val])
        if(examin){
            let newArr = [...arr]
            if(objSorting[name]){
                console.log("массив отсортирован")
                let newFunct = objSorting[name](val)
                let result = newArr.sort(newFunct)
                if(typeof setHooks === "function" ){
                    setHooks(result)
                }
                
                 
            }else{
                console.log("вернулось перове состояние")
                if(typeof setHooks === "function"){
                    setHooks(arr)
                }
            }
 
        }else{
            console.log("массив не изменился")
        }
    }


    type ifParams = string|null|undefined
    export  const filterState=(state:any[],name:ifParams=null,search:ifParams):any[]=>{
        if(name && search){
            return state.filter((arr)=>arr[name]===search)
        }
        return state
    }

    export const Filtration= (state:any,filter:string="default",val:any)=>{
        const z =val

        const ObjFilter:any = {
            sex:(state:any[])=>state.filter((arr)=>arr.sex===val),
            search:(state:any[])=>state.filter(arr=>arr.name.toLowerCase().includes(val.toLowerCase())),
            price:(state:any[])=>state.filter(arr=>arr.price<=val),
            default:(state:any[])=>state
            
        }
        return ObjFilter[filter](state)
    }