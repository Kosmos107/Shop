import React,{useState,FC} from 'react'
import style from "../Register.module.scss"
import {formix,ClassForForm} from "./FormType"
import cn from "classnames"

const Form:FC<formix> = ({signUp,name,btn,cln="24"}) => {
  const [login,setLogin] = useState()
  const [pass,setPass] = useState()
  
  const ChangeLogin = (e:any)=>{
    console.log(e)
    setLogin(e.target.value)
  }
  return (
    <div className={cn(style.Form__wrapper,style[cln])}>
      <p>{signUp}</p>
      <input
      className={style.Form__login}  
      type="text"
      value={login}
      placeholder={name}
       onChange={ChangeLogin}
      />

      <input 
      className={style.Form__pass}
      type="password" 
      value={pass}
      placeholder="Password"

      />

      <button >{btn}</button>
    </div>
  )
}

export default Form