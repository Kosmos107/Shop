import React,{useState} from 'react'
import style from "../Register.module.scss"
import logo from "./regist.svg"
import Forma from "../Form/Form"
import { ClassForForm } from '../Form/FormType'
import Sign from "../Form/Sign"
import { ValueRegist,ValueSign } from '../Form/FormType'



const Login = () => {
  
  return (
    <div className={style.Login__wrapper}>
        <div className={style.Login__logo}><img src={logo} alt="" /></div>
        <div className={style.Login__forma}>
        <Forma name="Login" btn="Sign Up" signUp="Войти" cln={ClassForForm.signUp}></Forma>
        </div>
        <div className={style.Login__icon}>
             <Sign value={ValueRegist} btn="регистрация" link="123" /> 
            
        </div>
    </div>
  )
}

export default Login