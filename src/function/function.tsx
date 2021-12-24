
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
