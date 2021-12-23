import React,{useState}from 'react'
import Filter from "../components/Filter"
import Product from "../components/Product"
import s from "../Contant.module.scss"
import {TypedSelector} from '../../../Hooks/TypedSelector'


type Search = string | undefined


interface Info {
    text?:string,
    sex?:Search,
    filter?:Search,
    val?:Search,
    children?:React.ReactChild|React.ReactNode
}



const Catalog:React.FC<Info> = ({text="Название Категорий",val=" ",filter="default"}) => {
    const List = [{money:67,age:23},
        {money:15},
        {money:25,},
        {money:30,},
    ]
    const [SortList,setSortList] = useState(List)

    const ObjFilter:any = {
        sex:()=>state.filter((arr)=>arr.sex===val),
        search:()=>state.filter(arr=>arr.name.toLowerCase().includes(val.toLowerCase())),
        default:()=>state
    }
    
    
    const state= TypedSelector(state=>state.product.list)
    const newState = ObjFilter[filter]()

   
    const Sorting = (arr:any,val:string,name:string):void=>{
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
                console.log("новый массив>",result)
                console.log("старый масив)",SortList)
                 setSortList(result)
            }else{
                console.log("вернулось перове состояние")
                 setSortList(arr)
            }
 
        }else{
            console.log("массив не изменился")
        }
    }

        console.log("изначальный массив>",SortList)

    return (
        <div>
           <div  className={s.control__panel}>
               <div  className={s.control__text}>{text}</div>
               <div className={s.control__filter}>
                   <Filter/>
                    <select onClick={(e:any)=>{Sorting(List,"money",e.target.value)}}  className={s.sorting}>
                        <option value="0">без сортировки</option>
                        <option value="sortIncrease">по возрастанию</option>
                        <option value="sortDecrement">по убыванию</option>
                    </select>
                    
                
                    
               </div>
           </div>
           <div className={s.shop} >
          {
              SortList.map((arr)=>{
                return (
                    <div style={{border:"1px solid red",fontSize:"25px",margin:"15px"}}>{arr.money}</div>
                )
              })
          }
            {/* {
            newState.length ?newState.map((arr:any)=>{
                return <Product key={arr.id}
                id={arr.id}
                like={arr.like}
                 name={arr.name}
                  price={arr.price}
                   size={arr.size} 
                   img={arr.img}/>
            }) : <div style={{margin:"0 auto",fontSize:"25px"}} > ничего не найдено, эх жалко</div> } */}
           </div>
        </div>
    )
}

export default Catalog
