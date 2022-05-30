import React,{FC} from 'react'
import { signType } from './FormType'
//
//
//
// разберись с link
//
//
//
const Sign:FC<signType> = ({value,link,btn}) => {
  return (
    <div>
        <p>{value}</p>
        <button >{btn}</button>
    </div>
  )
}

export default Sign