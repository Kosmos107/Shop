
import {prodActionType,prodState,Actions} from "../type/type"

const initState:prodState ={
    list:[{
        id:1,
        name:"Повседневная хлопковая футболка",
        price:200,
        size:"errrrrrr",
        like:false,
        sex:"woman",
        img:"https://static-sl.insales.ru/r/ZoLonGuTYq8/rs:fit:440:0:1/plain/images/products/1/3360/465005856/large_17050100_10_1.jpg@webp"
    },{
        id:2,
        name:"Твидовый кардиган из хлопка",
        price:356,
        size:"errrrrrr",
        like:false,
        sex:"woman",
        img:"https://static-sl.insales.ru/r/YQTJQZYg2rU/rs:fit:440:0:1/plain/images/products/1/4006/465006502/large_17024061_43.jpg@webp"
    },{
        id:3,
        name:"Объемный водоотталкивающий тренч",
        price:156,
        size:"errrrrrr",
        like:false,
        sex:"woman",
        img:"https://static-sl.insales.ru/r/OSxaN9BPjP0/rs:fit:440:0:1/plain/images/products/1/4851/465007347/large_17024061_43_R.jpg@webp"
    },
    {
        id:4,
        name:"Жилет из трикотажа в рубчик",
        price:440,
        size:"errrrrrr",
        like:false,
        sex:"woman",
        img:"https://static-sl.insales.ru/r/4kW9-d1VKJE/rs:fit:440:0:1/plain/images/products/1/5570/465008066/large_17024061_43_R.jpg@webp"
    },
    {
        id:5,
        name:"Хлопковая рубашка в полоску",
        price:120,
        size:"errrrrrr",
        like:false,
        sex:"woman",
        img:"https://static-sl.insales.ru/r/lsKF60SMcK0/rs:fit:440:0:1/plain/images/products/1/6068/465008564/large_17024061_43-99999999_01.jpg@webp",
    },
    {
        id:6,
        name:"Объемная рубашка в клетку",
        price:300,
        size:"errrrrrr",
        like:false,
        sex:"woman",
        img:"https://static-sl.insales.ru/r/GV-QJ4Ijndk/rs:fit:440:0:1/plain/images/products/1/7000/465009496/large_17024061_43_R.jpg@webp"
    },
    {
        id:7,
        name:"Джинсы с завышенной талией Wideleg",
        price:89,
        size:"errrrrrr",
        like:false,
        sex:"woman",
        img:"https://static-sl.insales.ru/r/M-WrIiMJCF8/rs:fit:440:0:1/plain/images/products/1/7836/465034908/large_17091088_08.jpg@webp"
    },
    {
        id:8,
        name:"Рубашка relaxed-fit из хлопка",
        price:466,
        size:"errrrrrr",
        like:false,
        sex:"men",
        img:"https://static-sl.insales.ru/r/_h241yGcUqI/rs:fit:440:0:1/plain/images/products/1/1684/465036948/large_17024061_43_R.jpg@webp"
    },
    {
        id:9,
        name:"Футболка тай-дай relaxed fit",
        price:336,
        size:"errrrrrr",
        like:false,
        sex:"men",
        img:"https://static-sl.insales.ru/r/uJheupH70aA/rs:fit:440:0:1/plain/images/products/1/3646/465038910/large_17024061_43_R.jpg@webp"
    },
    {
        id:10,
        name:"Хлопковая футболка стрейч",
        price:221,
        size:"errrrrrr",
        like:false,
        sex:"men",
        img:"https://static-sl.insales.ru/r/wViiq32sk10/rs:fit:440:0:1/plain/images/products/1/4628/465039892/large_17024061_43.jpg@webp"
    },]
}

export const prodReducer = (state=initState,action:Actions):prodState=>{
    switch(action.type){
        case prodActionType.AddNewLike:
            const likeID = action.payload.id
            const value =action.payload.value
            const Index = state.list.findIndex((arr)=>arr.id===likeID)
            const item = state.list[Index]
            const newObj ={
                ...item,
                like:value
            } 

            return{
                    ...state,
                    list:[
                        ...state.list.slice(0,Index),
                        newObj,
                        ...state.list.slice(Index+1),
                    ]
                }
            


        default:return state
    }

} 